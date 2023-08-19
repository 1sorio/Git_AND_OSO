import { z } from 'zod';


export const registerSchema = z.object({
    username : z.string({
        required_error:"Username is a required field "
    }),
    email : z.string({
        required_error:"Email address is a required field ",
    }).email({
        message:'invalid Email Address'
    }),
    password : z.string({
        required_error:"Password is a required field "
    }).min({
        message:'password must be at least 6 characters long'
    })

});



export const loginSchema = z.object({
    email : z.string({
        required_error:"Email address is a required field ",
    }).email({
        message:'invalid Email Address'
    }),
    password : z.string({
        required_error:"Password is a required field "
    }).min({
        message:'password must be at least 6 characters long'
    })
});