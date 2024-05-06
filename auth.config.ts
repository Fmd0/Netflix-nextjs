import {NextAuthConfig} from "next-auth";


const nextAuthConfig = {
    session: {
        strategy: 'jwt',
    },
    pages: {
      signIn: '/auth'
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            // console.log("callbacks authorized");
            if(auth && nextUrl.pathname.startsWith('/auth')) {
                // console.log("callbacks authorized redirect to /");
                return Response.redirect(new URL('/', nextUrl));
            }
            if(!auth && !nextUrl.pathname.startsWith('/auth')) {
                // console.log("callbacks authorized redirect to /auth");
                return false;
            }
            return true;
        }
    },
    providers: []
} satisfies NextAuthConfig;

export default nextAuthConfig;