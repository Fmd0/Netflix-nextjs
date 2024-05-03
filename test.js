
const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient();

// async function main() {
//     const data = await prisma.user.create({
//         data: {
//             name: "John",
//             email: "john@example.com",
//             password: "password@example.com",
//             movies: {
//                 create: [
//                     {
//                         "title": "Sintel",
//                         "description": "A lonely young woman, Sintel, helps and befriends a dragon, whom she calls Scales. But when he is kidnapped by an adult dragon, Sintel decides to embark on a dangerous quest to find her lost friend Scales.",
//                         "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
//                         "thumbnailUrl": "http://uhdtv.io/wp-content/uploads/2020/10/Sintel-3.jpg",
//                         "genre": "Adventure",
//                         "duration": "15 minutes"
//                     },
//                 ]
//             }
//         }
//     });
//     console.log(data);
// }

async function main() {
    const data = await prisma.user.update({
        where: {
            email: 'john@example.com',
        },
        data: {
            movies: {
                connect: {
                    id: "66310037c52043eafda3f83e"
                }
            }
        }
    });
    console.log(data);
}

async function read() {
    const data = await prisma.user.findUnique({
        where: {
            email: 'john@example.com',
        },
        include: {
            movies: true,
        }
    });
    console.log(data);
}


main();