import Link from "next/link";
import {FaPlayCircle} from "react-icons/fa";
import {IoChevronDownCircleOutline} from "react-icons/io5";
import React from "react";
import {useMoreInfoStore} from "@/hooks/useMoreInfoStore";
import FavouriteButton from "@/components/home/FavouriteButton";
import useUser from "@/hooks/useUser";
import {MovieType} from "@/utils/type";


const MovieCard = ({movieData}: {
    movieData: MovieType
}) => {

    const {setMoreInfoModal} = useMoreInfoStore();
    const {data:userData, error: userError} = useUser();

    if(userError) {
        return null;
    }

    return (
        <div className="relative h-full group/trendingCard transition-all">

            <Link href={`/movie/${movieData.id}`} className="h-full hidden md:block md:group-hover/trendingCard:opacity-50">
                <img className="w-full h-full object-cover rounded-lg" src={movieData.thumbnailUrl} alt="thumbnailUrl"/>
            </Link>

            <div className="md:w-full md:h-full md:absolute md:z-10 md:top-0 transition-all delay-300
                        md:-translate-y-[33%]
                        md:invisible
                        md:group-hover/trendingCard:visible
                        md:scale-0
                        md:group-hover/trendingCard:scale-100">
                <Link href={`/movie/${movieData.id}`} className="block h-[320px] md:h-[220px]">
                    <img className="w-full h-full object-cover rounded-lg" src={movieData.thumbnailUrl} alt="thumbnailUrl"/>
                </Link>

                <div className="w-full bg-gray-900 p-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center -px-10">
                            <Link href={`/movie/${movieData.id}`}>
                                <FaPlayCircle className="text-white" size={40}/>
                            </Link>

                            <FavouriteButton userData={userData} movieData={movieData} />
                        </div>

                        <button type="button" onClick={() => {
                            setMoreInfoModal(movieData);
                        }}>
                            <IoChevronDownCircleOutline size={50}/>
                        </button>
                    </div>
                    <p className="mt-2 flex items-center gap-2">
                        <span className="text-green-500">New</span>
                        <span>2024</span>
                    </p>
                    <p className="mt-2">{movieData.duration}</p>
                    <p className="mt-2">{movieData.genre}</p>
                </div>
            </div>
        </div>
    )
}


export default MovieCard;