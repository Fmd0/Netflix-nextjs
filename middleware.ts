import nextAuthConfig from "@/auth.config";
import NextAuth from "next-auth";


const {auth} = NextAuth(nextAuthConfig);

export default auth;

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}