'use server'
import {hash} from 'bcrypt';
import prisma from "@/libs/prisma";
import {signIn} from "@/auth";
import {isRedirectError} from "next/dist/client/components/redirect";
import auth from "@/middleware";


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
        return 'error';
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
        return 'error';
    }
}


export const addFavouriteAction = async (formData: FormData) => {
    const movieId = String(formData.get('movieId'));
    const authData = await auth();
    if(!authData?.user?.email) {
        return;
    }

    const data = await prisma.user.update({
        where: {
            email: authData.user.email,
        },
        data: {
            movies: {
                connect: {
                    id: movieId,
                }
            }
        }
    })

    if(!data) {
        console.log("User not valid");
    }
}