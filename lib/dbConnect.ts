// import mongoose from "mongoose";

// type connectionObject = {
//     isConnected?:number
// }

// const connection:connectionObject ={};

// async function dbConnect():Promise<void>{
//    if(connection.isConnected){
//       console.log("Already connected to database")
//       return
//    }

//    try {
//     const db=  await mongoose.connect(process.env.MONGODB_URI ||"")
//       connection.isConnected = db.connections[0].readyState

//       console.log("Database Connected Successfully")
    
//    } catch (error) {
//     console.log("Databse conection failed" ,error)
//     process.exit(1)
//    }
// }

// export default dbConnect; 

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined");
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  console.log("Database Connected Successfully");
  return cached.conn;
}

export default dbConnect;
