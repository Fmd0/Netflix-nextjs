'use server'
import {hash} from 'bcrypt';
import prisma from "@/utils/prisma";
import {signIn} from "@/auth";
import {isRedirectError} from "next/dist/client/components/redirect";
import z from "zod"

const RegisterFormSchema = z.object({
    email: z.string().email(),
    password: z.string(),
    name: z.string(),
})

export const registerAndSignInAction = async (_: null|string, formData: FormData) => {
    const parseResult = RegisterFormSchema.safeParse(Object.fromEntries(formData))

    if(!parseResult.success) {
        return 'User not valid';
    }

    parseResult.data.password = await hash(String(parseResult.data.password), 10);
    try {
        await prisma.user.create({
            data: parseResult.data,
        });
        await signIn('credentials', formData);
        return 'success';
    }
    catch (error) {
        if(isRedirectError(error)) {
            throw error;
        }
        console.log(error);
        return 'User not valid';
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
        return 'User not valid';
    }
}
