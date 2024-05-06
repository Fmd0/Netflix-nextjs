import Link from "next/link";
import {FaPlayCircle} from "react-icons/fa";
import {IoAddCircleOutline, IoCheckmarkCircleOutline, IoChevronDownCircleOutline} from "react-icons/io5";
import React from "react";
import {useFormStatus} from "react-dom";
import {useMoreInfoStore} from "@/hooks/useMoreInfoStore";
import useSWR, {mutate} from "swr";
import {MovieType} from "@/types/movie";
import fetcher from "@/libs/fetcher";


const MovieCard = ({d}: {d: MovieType}) => {

    const setMoreInfoModal = useMoreInfoStore(state => state.setMoreInfoModal);

    const {data:userData={movieIds: []}, error: userError, mutate: userMutate} =
        useSWR("/api/user", fetcher);

    const addFavoriteAction = async (formData: FormData) => {
        const rawFormData = Object.fromEntries(formData.entries());
        await fetch("/api/movies/favourites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(rawFormData),
        });
        await userMutate();
        await mutate('/api/movies/favourites');
    }

    const deleteFavoriteAction = async (formData: FormData) => {
        const rawFormData = Object.fromEntries(formData.entries());
        await fetch("/api/movies/favourites", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(rawFormData),
        });
        await userMutate();
        await mutate('/api/movies/favourites')
    }

    if(userError) {
        return null;
    }

    return (
        <div className="relative w-full h-full group/trendingCard transition-all">
            <Link href={`/movie/${d.id}`} className="w-full h-full group-hover/trendingCard:opacity-50">
                <img className="w-full h-full object-cover rounded-lg" src={d.thumbnailUrl} alt="thumbnailUrl"/>
            </Link>
            <div className="w-full h-full absolute top-0 transition-all delay-300
                        -translate-y-[50%]
                        invisible
                        group-hover/trendingCard:visible
                        scale-0
                        group-hover/trendingCard:scale-100">
                <Link href={`/movie/${d.id}`} className="w-full h-full">
                    <img className="w-full h-full object-cover rounded-lg" src={d.thumbnailUrl} alt="thumbnailUrl"/>
                </Link>
                <div className="w-full h-full bg-gray-900 p-5">
                    <div className="flex items-center justify-between">

                        <div className="flex items-center -px-10">
                            <FaPlayCircle className="text-white" size={40}/>

                            {!userData?.movieIds.includes(d?.id) &&
                                (<form action={addFavoriteAction} className="flex items-center">
                                    <input type="hidden" name="movieId" defaultValue={d?.id}/>
                                    <AddFavouriteButton/>
                                </form>)
                            }
                            {userData?.movieIds.includes(d?.id) &&
                                (<form action={deleteFavoriteAction} className="flex items-center">
                                    <input type="hidden" name="movieId" defaultValue={d?.id}/>
                                    <DeleteFavouriteButton/>
                                </form>)
                            }
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

const AddFavouriteButton = () => {
    const {pending} = useFormStatus();
    return (
        <button type="submit" disabled={pending}>
            <IoAddCircleOutline size={50}/>
        </button>
    )
}

const DeleteFavouriteButton = () => {
    const {pending} = useFormStatus();
    return (
        <button type="submit" disabled={pending}>
            <IoCheckmarkCircleOutline size={50}/>
        </button>
    )
}

export default MovieCard;