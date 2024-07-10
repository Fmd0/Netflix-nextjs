import auth from "@/middleware";
import prisma from "@/utils/prisma";

const GET = async (_: Request, {params: {movieId}}: { params: { movieId: string } }) => {
    try {
        const authData = await auth();
        if (!authData?.user?.email) {
            return Response.json({msg: 'User not valid'},{
                status: 401,
            })
        }

        if(!movieId) {
            return Response.json({msg: 'Movie not valid'}, {
                status: 500,
            })
        }

        const data = await prisma.movie.findUnique({
            where: {
                id: movieId,
            }
        })

        return Response.json(data);
    }
    catch(err) {
        console.log(err);
        return Response.json({msg: 'Get movie item error'}, {
            status: 500,
        })
    }
}


export {
    GET
}