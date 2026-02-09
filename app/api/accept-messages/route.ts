import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/option";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { User } from "next-auth";
import { success } from "zod";

export async function POST(request:Request){
    await dbConnect()

   const session= await getServerSession(authOptions)
   const user:User=session?.user as User

   if(!session ||!session.user){
    return Response.json({
        success :false,
        message:"Not Authenticated"
    },{
        status:401 
    })
   }

   const userId= user._id
   const {acceptMessage}= await request.json()

   try {
    const updatedUser= await UserModel.findByIdAndUpdate(
        userId,
        {isAcceptingMessage:acceptMessage},
        {new:true}
    )
    if(!updatedUser){
         return Response.json(
            {
            success:false,
             message:"Failed to update user status  to accept message"
            },{status:401})
    }else{
        return Response.json( 
         {
             success:true,
             message:"Message Acceptance status update Successfully"
        },
         {status:200})
    }

   } catch (error) {
     console.log("Failed to update user status  to accept message ")
      return Response.json(
        {
        success:false,
        message:"Failed to update user status  to accept message"
        },{status:500})
   }
}

export async function GET(request:Request){
        await dbConnect()

   const session= await getServerSession(authOptions)
   const user:User=session?.user as User

   if(!session ||!session.user){
    return Response.json({
        success :false,
        message:"Not Authenticated"
    },{
        status:401 
    })
   }

   const userId= user._id
}

