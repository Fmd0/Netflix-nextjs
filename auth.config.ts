// import {NextAuthConfig} from "next-auth";
//
//
// const nextAuthConfig = {
//     session: {
//         strategy: 'jwt',
//     },
//     trustHost: true,
//     pages: {
//       signIn: '/auth'
//     },
//     callbacks: {
//         authorized({ auth, request: { nextUrl } }) {
//             // console.log("nextUrl.pathname", nextUrl.pathname);
//             if(auth && (nextUrl.pathname.startsWith('/auth') || nextUrl.pathname.startsWith('/landing'))) {
//                 // console.log("callbacks authorized redirect to /");
//                 return Response.redirect(new URL('/', nextUrl));
//             }
//             if(!auth && !nextUrl.pathname.startsWith('/auth') && !nextUrl.pathname.startsWith('/landing') && !nextUrl.pathname.startsWith("/swagger"))  {
//                 // console.log("callbacks authorized redirect to /auth");
//                 return Response.redirect(new URL('/landing', nextUrl));
//             }
//             return true;
//         }
//     },
//     providers: [],
// } satisfies NextAuthConfig;
//
// export default nextAuthConfig;