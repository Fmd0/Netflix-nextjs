import auth from "@/middleware";
import prisma from "@/libs/prisma";
import {NextRequest, NextResponse} from "next/server";

const GET = async (req: NextRequest, {params}: { params: { movieId: string } }) => {

    const authData = await auth();
    if (!authData?.user?.email) {
        return new Response(JSON.stringify({msg: 'User not valid'}),{
            status: 500,
        })
    }

    if(params.movieId === "null") {
        return NextResponse.json({})
    }

    const data = await prisma.movie.findUnique({
        where: {
            id: params.movieId,
        }
    })

    if(!data) {
        return new Response(JSON.stringify({msg: 'Movie not valid'}),{
            status: 500,
        })
    }

    return NextResponse.json(data);
}

export {
    GET
}