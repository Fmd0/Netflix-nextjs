import auth from "@/middleware";
import prisma from "@/libs/prisma";

export const fetchUserInfo = async () => {
    const authData = await auth();
    if(!authData?.user?.email) {
        return null;
    }

    const data = await prisma.user.findUnique({
        where: {
            email: authData.user.email,
        }
    })

    return data;
}