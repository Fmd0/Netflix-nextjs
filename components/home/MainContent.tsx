'use client'
import Link from "next/link";
import { IoPlay, IoInformationCircleOutline } from "react-icons/io5";
import {useMoreInfoStore} from "@/hooks/useMoreInfoStore";
import {MovieType} from "@/utils/type";


const MainContent = ({movieData}: {
    movieData: MovieType
}) => {

    const {
        setMoreInfoModal,
    } = useMoreInfoStore();

    

    return (
        <>
            <main className="w-screen h-screen flex items-center px-10 relative top-20">
                <div className='max-w-[500px]'>
                    <h1 className='text-5xl font-bold'>{movieData?.title||""}</h1>
                    <p className="mt-8">{movieData?.description||""}</p>
                    <div className="flex items-center mt-4 gap-4">
                        <Link href={`/movie/${movieData?.id||""}`} className="bg-gray-100 text-black rounded-md py-2 px-4 flex items-center gap-1">
                            <IoPlay size={22}/>
                            Play
                        </Link>
                        <button type="button"
                                className="bg-gray-100 bg-opacity-30 text-white rounded-md py-2 px-4 flex items-center gap-1"
                                onClick={() => setMoreInfoModal(movieData||null)}
                        >
                            <IoInformationCircleOutline size={22}/>
                            More Info
                        </button>
                    </div>
                </div>
            </main>

            {/*todo modify url*/}
            <div className="w-screen h-screen absolute z-[-1] top-0 left-0 opacity-75">
                {
                    movieData?.videoUrl &&
                    <video src="/BigBuckBunny.mp4" playsInline autoPlay loop muted
                           className="w-full h-full object-cover object-center"/>
                }
                {
                    !(movieData?.videoUrl) && movieData?.thumbnailUrl &&
                    <img src={movieData.thumbnailUrl} className="w-full h-full object-cover object-center"/>
                }
            </div>
        </>
    )
}

export default MainContent;