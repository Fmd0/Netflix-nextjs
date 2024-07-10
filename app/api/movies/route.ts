import prisma from "@/utils/prisma";
import {NextResponse} from "next/server";
import {unstable_noStore} from "next/cache";


const GET = async () => {
    unstable_noStore();
    const data = await prisma.movie.findMany({
        take: 4,
    });

    return NextResponse.json({movies: data});
}

export {
    GET,
}