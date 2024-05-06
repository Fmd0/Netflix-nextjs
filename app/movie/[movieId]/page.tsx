'use client'
import { FaArrowLeft } from "react-icons/fa";
import useSWR from "swr";
import fetcher from "@/libs/fetcher";
import Link from "next/link";
import useMovie from "@/hooks/useMovie";



const Page = ({params:{movieId}}: {params: {movieId: string}}) => {

    const {data={}, error} = useMovie(movieId);


    if(error) {
        console.log(error);
        return null;
    }


    return (
        <div className="w-screen h-screen">
            <nav className="flex gap-2 md:gap-6 fixed z-10 top-0 left-0 items-center w-full p-2 md:p-4 bg-black">
                <Link href="/">
                    <FaArrowLeft className="w-6 h-6 md:w-[44px] md:h-[44px]"/>
                </Link>
                <span className="text-lg md:text-3xl">Watching: </span>
                <span className="text-lg font-bold md:text-3xl">{data?.title}</span>
            </nav>
            <video className="w-full h-full " src="/BigBuckBunny.mp4" autoPlay controls muted />
        </div>
    )
}

export default Page;