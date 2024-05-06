import Link from "next/link";
import {FaPlayCircle} from "react-icons/fa";
import {IoChevronDownCircleOutline} from "react-icons/io5";
import React from "react";
import {useMoreInfoStore} from "@/hooks/useMoreInfoStore";
import {MovieType} from "@/types/movie";
import FavouriteButton from "@/components/FavouriteButton";
import useUser from "@/hooks/useUser";


const MovieCard = ({d}: {d: MovieType}) => {

    const setMoreInfoModal = useMoreInfoStore(state => state.setMoreInfoModal);
    const {data:userData={movieIds: []}, error: userError} = useUser();

    if(userError) {
        return null;
    }

    return (
        <div className="relative w-full h-full group/trendingCard transition-all">
            <Link href={`/movie/${d.id}`} className="w-full h-full hidden md:block md:group-hover/trendingCard:opacity-50">
                <img className="w-full h-full object-cover rounded-lg" src={d.thumbnailUrl} alt="thumbnailUrl"/>
            </Link>
            <div className="md:w-full md:h-full md:absolute md:z-10 md:top-0 transition-all delay-300
                        md:-translate-y-[50%]
                        md:invisible
                        md:group-hover/trendingCard:visible
                        md:scale-0
                        md:group-hover/trendingCard:scale-100">
                <Link href={`/movie/${d.id}`} className="w-full h-full">
                    <img className="w-full h-full object-cover rounded-lg" src={d.thumbnailUrl} alt="thumbnailUrl"/>
                </Link>
                <div className="w-full h-full bg-gray-900 p-5">
                    <div className="flex items-center justify-between">

                        <div className="flex items-center -px-10">
                            <Link href={`/movie/${d.id}`}>
                                <FaPlayCircle className="text-white" size={40}/>
                            </Link>

                            <FavouriteButton userData={userData} movieData={d} />
                        </div>

                        <button type="button" onClick={() => setMoreInfoModal(d.id)}>
                            <IoChevronDownCircleOutline size={50}/>
                        </button>
                    </div>
                    <p className="mt-2">
                        <span className="text-green-500">New</span> 2023
                    </p>
                    <p className="mt-2">15 Minutes</p>
                    <p className="mt-2">Adventure</p>
                </div>
            </div>
        </div>
    )
}


export default MovieCard;