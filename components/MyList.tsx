'use client'
import useSWR, {mutate} from "swr";
import fetcher from "@/libs/fetcher";
import {MovieType} from "@/types/movie";
import Link from "next/link";
import { IoCheckmarkCircleOutline, IoChevronDownCircleOutline, IoPlayCircle} from "react-icons/io5";
import {useFormStatus} from "react-dom";
import React from "react";
import {useMoreInfoStore} from "@/hooks/useMoreInfoStore";

const MyList = () => {
    const {data, error, isLoading, mutate: favouriteMutate} = useSWR("/api/movies/favourites", fetcher);
    const setMoreInfoModal = useMoreInfoStore(state => state.setMoreInfoModal);

    const deleteFavoriteAction = async (formData: FormData) => {
        const rawFormData = Object.fromEntries(formData.entries());
        await fetch("/api/movies/favourites", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(rawFormData),
        });
        await favouriteMutate();
        await mutate("/api/user")
    }

    if(isLoading) {
        return null
    }

    if(error) {
        console.log(error);
        return null;
    }

    if(data.length === 0) {
        return null;
    }

    return (
        <div className="p-10">
            <h3 className="text-xl font-bold">My List</h3>
            <div className="mt-4 grid grid-cols-4 grid-rows-[200px] gap-4 items-center">

                {data?.movies.map((d: MovieType) => (
                    <div key={d.id} className="relative w-full h-full group/trendingCard transition-all hover:-translate-y-[50%] delay-300">
                        <Link href="/" className="w-full h-full">
                            <img className="w-full h-full object-cover rounded-lg" src={d.thumbnailUrl} alt="thumbnailUrl"/>
                        </Link>
                        <div className="w-full h-full bg-gray-900 p-5 invisible group-hover/trendingCard:visible delay-300">
                            <div className="flex items-center justify-between">

                                <div className="flex items-center">
                                    <IoPlayCircle size={50}/>

                                    <form action={deleteFavoriteAction} className="flex items-center">
                                        <input type="hidden" name="movieId" defaultValue={d?.id}/>
                                        <DeleteFavouriteButton />
                                    </form>
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
                ))}

            </div>
        </div>
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

export default MyList;