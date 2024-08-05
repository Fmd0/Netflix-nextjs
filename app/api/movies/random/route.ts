import {auth} from "@/auth";
import prisma from "@/utils/prisma";

const GET = async () => {
    try {
        const authData = await auth();
        if(!authData?.user?.email) {
            return Response.json({msg: "User not valid"}, {
                status: 401,
            });
        }

        // const movieCount = await prisma.movie.count();
        // const random = Math.floor(Math.random() * movieCount);

        const data = await prisma.movie.findFirst({
            skip: 0,
            take: 1,
        });

        return Response.json(data);
    }
    catch(err) {
        console.log(err);
        return Response.json({msg: 'Get random movie error'}, {
            status: 500,
        })
    }
}

export {
    GET,
}