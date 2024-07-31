import prisma from "@/utils/prisma";
import auth from "@/middleware";


const GET = async () => {
    try {
        const authData = await auth();
        if(!authData?.user?.email) {
            return Response.json({msg: "User not valid"}, {
                status: 401,
            });
        }

        const data = await prisma.movie.findMany({
            take: 4,
        });
        return Response.json({movies: data});
    }
    catch(err) {
        console.log(err);
        return Response.json({msg: "Get movies failed"}, {
            status: 500,
        })
    }
}

export {
    GET,
}