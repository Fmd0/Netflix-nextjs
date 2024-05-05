import auth from "@/middleware";
import {NextResponse} from "next/server";
import prisma from "@/libs/prisma";

const GET = auth(async (req) => {

    if(!req.auth?.user?.email) {
        return NextResponse.json([]);
    }

    const data = await prisma.user.findUnique({
        where: {
            email: req.auth.user.email,
        },
        include: {
            movies: true,
        }
    })

    if(!data) {
        return new Response(JSON.stringify({msg: "User not valid"}), {
            status: 500,
        });
    }

    return NextResponse.json({movies: data.movies});
})



const POST = auth(async (req) => {
    if(!req.auth?.user?.email) {
        return new Response(JSON.stringify({msg: 'User not valid'}), {
            status: 500,
        })
    }

    const reqData = await req.json();
    if(!reqData.movieId) {
        return new Response(JSON.stringify({msg: 'MovieId not valid'}), {
            status: 500,
        })
    }
    const data = await prisma.user.update({
        where: {
            email: req.auth.user.email,
        },
        data: {
            movies: {
                connect: {
                    id: reqData.movieId,
                }
            }
        }
    })

    if(!data) {
        return new Response(JSON.stringify({msg: 'MovieId not valid'}), {
            status: 500,
        })
    }
    return NextResponse.json(data);
})


const DELETE = auth(async (req) => {
    if(!req.auth?.user?.email) {
        return new Response(JSON.stringify({msg: 'User not valid'}), {
            status: 500,
        })
    }
    const reqData = await req.json();
    if(!reqData.movieId) {
        return new Response(JSON.stringify({msg: 'MovieId not valid'}), {
            status: 500,
        })
    }
    const data = await prisma.user.update({
        where: {
            email: req.auth.user.email,
        },
        data: {
            movies: {
                disconnect: {
                    id: reqData.movieId,
                }
            }
        }
    })

    if(!data) {
        return new Response(JSON.stringify({msg: 'MovieId not valid'}), {
            status: 500,
        })
    }
    return NextResponse.json(data);
})


export {
    GET,
    POST,
    DELETE,
}