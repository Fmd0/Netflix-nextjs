'use client'
import { FaArrowLeft } from "react-icons/fa";
import useSWR from "swr";
import fetcher from "@/libs/fetcher";
import Link from "next/link";



const Page = ({params:{movieId}}: {params: {movieId: string}}) => {

    const {data={}, error} = useSWR(`/api/movies/${movieId}`, fetcher);

    if(error) {
        console.log(error);
        return null;
    }


    return (
        <div className="w-screen h-screen">
            <nav className="flex gap-6 fixed z-10 top-0 left-0 items-center w-full p-4 bg-black">
                <Link href="/">
                    <FaArrowLeft size={50}/>
                </Link>
                <span className="text-3xl">Watching: </span>
                <span className="font-bold text-3xl">{data?.title}</span>
            </nav>
            <video className="w-full h-full " src="/BigBuckBunny.mp4" autoPlay controls muted />
        </div>
    )
}

export default Page;