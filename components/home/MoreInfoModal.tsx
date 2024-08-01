'use client'
import {IoPlay, IoCloseOutline} from "react-icons/io5";
import Link from "next/link";
import {useMoreInfoStore} from "@/hooks/useMoreInfoStore";
import clsx from "clsx";
import React from "react";
import FavouriteButton from "@/components/home/FavouriteButton";
import useUser from "@/hooks/useUser";



const MoreInfoModal = () => {

    const {
        moreInfoModalOpen,
        clearMoreInfoModal,
        moreInfoMovie
    } = useMoreInfoStore();


    // const {data:movieData, error: movieError} = useMovie(moreInfoModalIndex);
    const {data: userData} = useUser();
    


    return (
        <div className={clsx("w-screen h-screen bg-black bg-opacity-80 fixed z-20 left-0 top-0 grid place-items-center transition-all duration-300",
            moreInfoModalOpen?"opacity-100":"opacity-0 pointer-events-none")}
             onClick={clearMoreInfoModal}
        >

            <div className={clsx("w-[90%] max-w-[800px] h-[600px] bg-black relative rounded-xl transition-all duration-300",
                moreInfoModalOpen?"scale-100":"scale-0")}
                 onClick={e => e.stopPropagation()}
            >
                <div className="h-[400px] bg-transparent relative flex items-end justify-start p-10">
                    <div>
                        <h1 className='text-3xl font-bold mb-5' >{moreInfoMovie?.title}</h1>
                        <div className="flex gap-4 items-center">
                            <Link href={`/movie/${moreInfoMovie?.id}`} className="bg-gray-100 text-black rounded-md py-2 px-4 flex items-center gap-1">
                                <IoPlay size={22} />
                                Play
                            </Link>

                            <FavouriteButton userData={userData} movieData={moreInfoMovie} />
                        </div>
                    </div>

                    {
                        moreInfoMovie?.thumbnailUrl && moreInfoMovie.thumbnailUrl !== "" &&
                        <img src={moreInfoMovie.thumbnailUrl} className="absolute block z-[-1] top-0 left-0 w-full h-full object-cover object-center rounded-t-xl"/>
                    }

                </div>

                <div className="bg-gray-900 p-10 h-[200px]">
                    <p className="mb-5">
                        <span className="text-green-500 pr-2">New</span> {moreInfoMovie?.duration+" "+moreInfoMovie?.genre}
                    </p>
                    <p>{moreInfoMovie?.description}</p>
                </div>
                <div className="absolute z-[2] top-1 right-1 size-[28px] rounded-[999px] bg-gray-500 bg-opacity-50">
                    <IoCloseOutline size={28} className="text-gray-100 cursor-pointer" onClick={clearMoreInfoModal} />
                </div>
            </div>

        </div>
    )
}



export default MoreInfoModal