import NextAuth, {CredentialsSignin} from "next-auth";
import Credentials from "@auth/core/providers/credentials";
import {PrismaAdapter} from "@auth/prisma-adapter";
import prisma from "@/libs/prisma";
import {compare} from 'bcrypt';
import nextAuthConfig from "@/auth.config";


export const {auth, handlers, signIn, signOut} = NextAuth({
    ...nextAuthConfig,
    adapter: PrismaAdapter(prisma),
    providers: [
        Credentials({
            credentials: {
                email: {type: 'string'},
                password: {type: 'string'},
            },
            authorize: async (credentials) => {

                const user = await prisma.user.findFirst({
                    where: {
                        email: String(credentials.email)
                    }
                })
                if(!user) {
                    return null;
                }
                const isPasswordValid = await compare(String(credentials.password),user.password||'');
                if(!isPasswordValid) {
                    return null;
                }
                return user;
            },
        }),
        // Resend({
        //     from: 'auth@nlshop.com.cn'
        // })
    ]
})