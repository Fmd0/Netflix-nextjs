import NextAuth from "next-auth";
import Credentials from "@auth/core/providers/credentials";
import {PrismaAdapter} from "@auth/prisma-adapter";
import prisma from "@/utils/prisma";
import {compare} from 'bcryptjs';
import Resend from "@auth/core/providers/resend";
import Google from "@auth/core/providers/google";
import GitHub from "@auth/core/providers/github";


export const {auth, handlers, signIn, signOut} = NextAuth({
    trustHost: true,
    pages: {
        signIn: '/auth'
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            // console.log("nextUrl.pathname", nextUrl.pathname);
            if(auth && (nextUrl.pathname.startsWith('/auth') || nextUrl.pathname.startsWith('/landing'))) {
                // console.log("callbacks authorized redirect to /");
                return Response.redirect(new URL('/', nextUrl));
            }
            if(!auth && !nextUrl.pathname.startsWith('/auth') && !nextUrl.pathname.startsWith('/landing') && !nextUrl.pathname.startsWith("/swagger"))  {
                // console.log("callbacks authorized redirect to /auth");
                return Response.redirect(new URL('/landing', nextUrl));
            }
            return true;
        }
    },
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
        Resend({
            from: "no-reply@nlshop.com.cn"
        }),
        Google,
        GitHub
    ],
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt',
    },
})