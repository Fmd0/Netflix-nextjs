import prisma from "@/utils/prisma";
import auth from "@/middleware";
import {NextRequest} from "next/server";


const GET = async (req: NextRequest) => {
    try {
        const authData = await auth();
        if(!authData?.user?.email) {
            return Response.json({msg: "User not valid"}, {
                status: 401,
            });
        }

        let type = {};
        const typeParam =  req.nextUrl.searchParams.get("type")||"";
        if(typeParam !== "") {
            type = {
                type: typeParam,
            }
        }

        const data = await prisma.movie.findMany({
            take: 4,
            where: {
                ...type,
            }
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