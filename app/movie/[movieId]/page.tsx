'use client'
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import useMovie from "@/hooks/useMovie";



const Page = ({params:{movieId}}: {
    params: {movieId: string}
}) => {

    const {data, error} = useMovie(movieId);


    if(error) {
        return null;
    }


    return (
        <div className="w-screen h-screen">
            <nav className="fixed z-10 top-0 left-0 flex items-center gap-2 md:gap-6 w-full p-2 md:p-4 bg-black opacity-70">
                <Link href="/">
                    <FaArrowLeft className="size-6 md:size-10"/>
                </Link>
                <span className="text-lg font-semibold md:text-3xl">Watching: </span>
                <span className="text-lg font-bold md:text-3xl">{data?.title}</span>
            </nav>

            {/*todolist modify url*/}
            {
                data?.videoUrl &&
                <video className="w-full h-full" src="/BigBuckBunny.mp4" autoPlay controls muted/>
            }
        </div>
    )
}

export default Page;