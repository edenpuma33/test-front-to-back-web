import { z } from "zod"

export const registerSchema = z.object({
    email: z.string().email("Email is invalid"),
    firstname: z.string().min(3,"Firstname must be more than 3 character"),
    lastname: z.string().min(3,"Lastname must be more than 3 chareacter"),
    password: z.string().min(6, "Password must be more than 6 character"),
    confirmPassword: z.string().min(6, "Confirm Password must be more than 6 character")
}).refine((data)=>data.password === data.confirmPassword,{
    message:"Confirm Password not match",
    path:["confirmPassword"]
})