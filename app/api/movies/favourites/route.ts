import auth from "@/middleware";
import prisma from "@/utils/prisma";
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

        const data = await prisma.user.findUnique({
            where: {
                email: authData.user.email,
            },
            include: {
                movies: {
                    where: {
                        ...type,
                    }
                }
            }
        })

        return Response.json({movies: data?.movies||[]});
    }
    catch(err) {
        console.log(err);
        return Response.json({msg: "Get favorites error"}, {
            status: 500,
        });
    }

}



const POST = auth(async (req) => {
    try {
        if(!req.auth?.user?.email) {
            return Response.json({msg: 'User not valid'}, {
                status: 401,
            })
        }

        const reqData = await req.json();
        if(!reqData.movieId) {
            return Response.json({msg: 'MovieId not found'}, {
                status: 500,
            })
        }

        const data = await prisma.user.update({
            where: {
                email: req.auth.user.email,
            },
            data: {
                movies: {
                    connect: {
                        id: reqData.movieId,
                    }
                }
            }
        })

        return Response.json(data);
    }
    catch(err) {
        console.log(err);
        return Response.json({msg: 'Post favorites error'}, {
            status: 500,
        })
    }
})


const DELETE = auth(async (req) => {
    try {
        if(!req.auth?.user?.email) {
            return Response.json({msg: 'User not valid'}, {
                status: 401,
            })
        }

        const reqData = await req.json();
        if(!reqData.movieId) {
            return Response.json({msg: 'MovieId not valid'}, {
                status: 500,
            })
        }

        const data = await prisma.user.update({
            where: {
                email: req.auth.user.email,
            },
            data: {
                movies: {
                    disconnect: {
                        id: reqData.movieId,
                    }
                }
            }
        })

        return Response.json(data);
    }
    catch(err) {
        console.log(err);
        return Response.json({msg: 'Delete favorites error'}, {
            status: 500,
        })
    }
})



export {
    GET,
    POST,
    DELETE,
}