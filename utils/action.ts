'use server'
import {hash} from 'bcryptjs';
import prisma from "@/utils/prisma";
import {signIn} from "@/auth";
import {isRedirectError} from "next/dist/client/components/redirect";
import z from "zod"


const RegisterFormSchema = z.object({
    email: z.string(),
    password: z.string(),
    name: z.string(),
})

export const registerAndSignInAction = async (_: null|string, formData: FormData) => {
    try {
        const parseResult = RegisterFormSchema.safeParse(Object.fromEntries(formData))

        if(!parseResult.success) {
            console.log("User info format not valid");
            return "User info format not valid";
        }

        parseResult.data.password = await hash(String(parseResult.data.password), 10);
        await prisma.user.create({
            data: parseResult.data,
        });
        await signIn('credentials', formData, {

        });
        return 'success';

    }
    catch (error) {
        if(isRedirectError(error)) {
            throw error;
        }
        console.log(error);
        return 'Register not valid';
    }
}


export const signInAction = async (_: null|string, formData: FormData) => {
    try {
        await signIn('credentials', formData);
        return 'success';
    }
    catch (error) {
        if(isRedirectError(error)) {
            throw error;
        }
        console.log(error);
        return 'SignIn not valid';
    }
}
