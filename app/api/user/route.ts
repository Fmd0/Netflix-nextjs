import auth from "@/middleware";
import prisma from "@/utils/prisma";

const GET = async (_: Request) => {
    try {
        const authData = await auth();
        if(!authData?.user?.email) {
            return Response.json({msg: "User not valid"}, {
                status: 401,
            })
        }

        const data = await prisma.user.findUnique({
            where: {
                email: authData.user.email,
            }
        });

        return Response.json(data);
    }
    catch(err) {
        console.log(err);
        return Response.json({msg: 'Get user error'}, {
            status: 500,
        });
    }
}



export {
    GET,
}