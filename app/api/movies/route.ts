import prisma from "@/utils/prisma";


const GET = async () => {
    const data = await prisma.movie.findMany({
        take: 4,
    });
    return Response.json({movies: data});
}

export {
    GET,
}