'use client'
import { FaArrowLeft } from "react-icons/fa";
import useMovie from "@/hooks/useMovie";
import {useRouter} from "next/navigation";



const Page = ({params:{movieId}}: {
    params: {movieId: string}
}) => {

    const {data} = useMovie(movieId);

    const router = useRouter();


    return (
        <div className="w-screen h-screen">
            <nav className="fixed z-10 top-0 left-0 flex items-center gap-2 md:gap-6 w-full p-2 md:p-4 bg-black opacity-70">
                <button onClick={() => {  router.back(); }}>
                    <FaArrowLeft className="size-6 md:size-10"/>
                </button>
                <span className="text-lg font-semibold md:text-3xl">Watching: </span>
                <span className="text-lg font-bold md:text-3xl">{data?.title}</span>
            </nav>

            {/*todo modify url*/}
            {
                data?.videoUrl && data.videoUrl !== "" &&
                <video className="w-full h-full" src="/BigBuckBunny.mp4" autoPlay controls muted/>
            }
            {
                !(data?.videoUrl) && data?.trailerUrl && data.trailerUrl !== "" &&
                <video className="w-full h-full" src={data.trailerUrl} autoPlay controls muted/>
            }
        </div>
    )
}

export default Page;