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

    return NextResponse.json(data.movies);
})


export {
    GET,
}