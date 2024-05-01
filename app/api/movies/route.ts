import prisma from "@/libs/prisma";
import {NextResponse} from "next/server";


const GET = async () => {
    const data = await prisma.movie.findMany({
        take: 4,
    });

    return NextResponse.json(data);
}

export {
    GET,
}