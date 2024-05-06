'use client'
import {IoPlay} from "react-icons/io5";
import Link from "next/link";
import {useMoreInfoStore} from "@/hooks/useMoreInfoStore";
import { IoCloseOutline } from "react-icons/io5";
import clsx from "clsx";
import React from "react";
import useMovie from "@/hooks/useMovie";
import FavouriteButton from "@/components/FavouriteButton";
import useUser from "@/hooks/useUser";



const MoreInfoModal = () => {

    const moreInfoModalIndex = useMoreInfoStore(state => state.moreInfoModalIndex);
    const clearMoreInfoModal = useMoreInfoStore(state => state.clearMoreInfoModal)

    const {data:movieData={}, error: movieError} = useMovie(String(moreInfoModalIndex));
    const {data: userData={}, error: userError} = useUser();


    if(moreInfoModalIndex === null) {
        return null;
    }


    if(movieError || userError) {
        console.log(movieError, userError);
        return null;
    }


    return (
        <div className={clsx("w-screen h-screen bg-black bg-opacity-80 fixed z-20 left-0 top-0 grid place-items-center transition-all duration-300",
            moreInfoModalIndex?"visible":"invisible"
            )}>
            <div className={clsx("w-[90%] max-w-[800px] h-[600px] bg-black relative rounded-xl transition-all duration-300",
                moreInfoModalIndex?"scale-100":"scale-0")}>
                <div className="h-[400px] bg-transparent relative flex items-end justify-start p-10">
                    <div>
                        <h1 className='text-3xl font-bold mb-5' >{movieData?.title}</h1>
                        <div className="flex gap-4 items-center">
                            <Link href={`/movie/${movieData.id}`} className="bg-gray-100 text-black rounded-md py-2 px-4 flex items-center gap-1">
                                <IoPlay size={22} />
                                Play
                            </Link>

                            <FavouriteButton userData={userData} movieData={movieData} />
                        </div>
                    </div>
                    <video src="/BigBuckBunny.mp4" autoPlay loop playsInline muted className="rounded-t-xl absolute block z-[-1] top-0 left-0 opacity-50 w-full h-full object-cover object-center" />
                </div>

                <div className="bg-gray-900 p-10 h-[200px]">
                    <p className="mb-5">
                        <span className="text-green-500 pr-2">New</span> {movieData?.duration+" "+movieData?.genre}
                    </p>
                    <p>{movieData?.description}</p>
                </div>
                <IoCloseOutline size={28} className="text-gray-100 absolute z-[2] top-1 right-1 cursor-pointer" onClick={clearMoreInfoModal} />
            </div>
        </div>
    )
}



export default MoreInfoModal