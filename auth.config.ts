import {NextAuthConfig} from "next-auth";


const nextAuthConfig = {
    // session: {
    //     strategy: 'jwt',
    // },
    pages: {
      signIn: '/auth'
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            if(auth && nextUrl.pathname.startsWith('/auth')) {
                return Response.redirect(new URL('/', nextUrl));
            }
            if(!auth && !nextUrl.pathname.startsWith('/auth')) {
                return false;
            }
            return true;
        }
    },
    providers: []
} satisfies NextAuthConfig;

export default nextAuthConfig;