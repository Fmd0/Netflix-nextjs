import auth from "@/middleware";
import prisma from "@/libs/prisma";
import {NextResponse} from "next/server";
import {unstable_noStore} from "next/cache";

const GET = auth(async (req) => {
    unstable_noStore();
    if(!req.auth?.user?.email) {
        return new Response(JSON.stringify({msg: 'User not valid'}), {
            status: 500,
        })
    }

    const data = await prisma.user.findUnique({
        where: {
            email: req.auth.user.email,
        }
    });

    if(!data) {
        return new Response(JSON.stringify({msg: 'User not valid'}), {
            status: 500,
        })
    }

    return NextResponse.json(data);
})



export {
    GET,
}