'use server'
import {hash} from 'bcrypt';
import prisma from "@/utils/prisma";
import {signIn} from "@/auth";
import {isRedirectError} from "next/dist/client/components/redirect";


export const registerAndSignInAction = async (_: null|string, formData: FormData) => {
    const rawFormData = Object.fromEntries(formData.entries());
    const password = await hash(String(rawFormData.password), 10);
    try {
        await prisma.user.create({
            data: {
                email: String(rawFormData.email),
                password: password,
            }
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
