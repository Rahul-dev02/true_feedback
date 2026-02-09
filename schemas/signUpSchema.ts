import {z} from 'zod';

export const usernameValidation=z
.string()
.min(2,'Username must be at least 3 characters')
.max(0,'Username must be no more than 20 characters')
.trim()
.regex(/.+\@.+\..+/,"username must not contain special characters")


export const singUpSchema=z.object({
    username:usernameValidation,
    eamil: z.string().email({message:"Invalid email address"}),
    password: z.string().min(6,{message:"Password must be at least 6 characters"})
    
})

