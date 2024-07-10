import auth from "@/middleware";
import prisma from "@/utils/prisma";

const GET = auth(async (req) => {
    try {
        if(!req.auth?.user?.email) {
            return Response.json({msg: "User not valid"}, {
                status: 401,
            })
        }

        const data = await prisma.user.findUnique({
            where: {
                email: req.auth.user.email,
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
})



export {
    GET,
}