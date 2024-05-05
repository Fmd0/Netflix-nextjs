'use client'
import {IoPlay} from "react-icons/io5";
import Link from "next/link";
import { IoAddCircleOutline } from "react-icons/io5";
import useSWR, {mutate} from "swr";
import fetcher from "@/libs/fetcher";
import {useMoreInfoStore} from "@/hooks/useMoreInfoStore";
import { IoCloseOutline } from "react-icons/io5";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import clsx from "clsx";
import {useFormStatus} from "react-dom";
import React from "react";



const MoreInfoModal = () => {

    const moreInfoModalIndex = useMoreInfoStore(state => state.moreInfoModalIndex);
    const {data: movieData, error: movieError, isLoading: movieIsLoading, mutate: moviesMutate} =
        useSWR(`/api/movies/${moreInfoModalIndex}`, fetcher);

    const {data: userData, error, isLoading, mutate: userMutate} =
        useSWR("/api/user", fetcher);

    const clearMoreInfoModal = useMoreInfoStore(state => state.clearMoreInfoModal)

    const addFavoriteAction = async (formData: FormData) => {
        const rawFormData = Object.fromEntries(formData.entries());
        await fetch("/api/movies/favourites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(rawFormData),
        });
        const moviesMutatePromise = moviesMutate();
        const userMutatePromise = userMutate();
        await Promise.all([moviesMutatePromise, userMutatePromise]);
        await mutate("/api/movies/favourites")
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
        const moviesMutatePromise = moviesMutate();
        const userMutatePromise = userMutate();
        await Promise.all([moviesMutatePromise, userMutatePromise]);
        await mutate("/api/movies/favourites")
    }


    if(moreInfoModalIndex === null) {
        return null;
    }

    // if(movieIsLoading || isLoading) {
    //     return null;
    // }

    if(movieError || error) {
        console.log(error);
        // return null;
    }


    return (
        <div className={clsx("w-screen h-screen bg-black bg-opacity-80 fixed z-[2] left-0 top-0 grid place-items-center transition-all duration-300",
            moreInfoModalIndex?"visible":"invisible"
            )}>
            <div className={clsx("w-[800px] h-[600px] bg-black relative rounded-xl transition-all duration-300",
                moreInfoModalIndex?"scale-100":"scale-0")}>
                <div className="h-[400px] bg-transparent relative flex items-end justify-start p-10">
                    <div>
                        <h1 className='text-3xl font-bold mb-5' >{movieData?.title}</h1>
                        <div className="flex gap-4 items-center">
                            <Link href="/" className="bg-gray-100 text-black rounded-md py-2 px-4 flex items-center gap-1">
                                <IoPlay size={22} />
                                Play
                            </Link>

                            {!userData?.movieIds.includes(movieData?.id) &&
                                (<form action={addFavoriteAction} className="flex items-center">
                                    <input type="hidden" name="movieId" defaultValue={movieData?.id}/>
                                    <AddFavouriteButton />
                                </form>)
                            }
                            {userData?.movieIds.includes(movieData?.id) &&
                                (<form action={deleteFavoriteAction} className="flex items-center">
                                    <input type="hidden" name="movieId" defaultValue={movieData?.id}/>
                                    <DeleteFavouriteButton />
                                </form>)
                            }
                        </div>
                    </div>
                    <video src="/BigBuckBunny.mp4" autoPlay muted className="rounded-t-xl absolute block z-[-1] top-0 left-0 opacity-50 w-full h-full object-cover object-center"></video>
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

const AddFavouriteButton = () => {
    const {pending} = useFormStatus();
    return (
        <button type="submit" disabled={pending}>
            <IoAddCircleOutline size={36}/>
        </button>
    )
}

const DeleteFavouriteButton = () => {
    const {pending} = useFormStatus();
    return (
        <button type="submit" disabled={pending}>
            <IoCheckmarkCircleOutline size={36}/>
        </button>
    )
}

export default MoreInfoModal