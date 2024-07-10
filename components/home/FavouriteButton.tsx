import React from "react";
import {useFormStatus} from "react-dom";
import {IoAddCircleOutline, IoCheckmarkCircleOutline} from "react-icons/io5";
import {MovieType, UserType} from "@/utils/type";
import {mutateMoviesFavourites} from "@/hooks/useMoviesFavourites";
import {mutateUser} from "@/hooks/useUser";


const FavouriteButton = ({userData, movieData}: {userData:UserType ,movieData:MovieType|null}) => {

    const addFavoriteAction = async (formData: FormData) => {
        const rawFormData = Object.fromEntries(formData.entries());
        await fetch("/api/movies/favourites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(rawFormData),
        });
        await Promise.all([mutateMoviesFavourites(), mutateUser()]);
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
        await Promise.all([mutateMoviesFavourites(), mutateUser()]);
    }

    const isIncluded = userData?.movieIds?.includes(movieData?.id||"");

    return (
        <>
            {!isIncluded &&
                (<form action={addFavoriteAction} className="flex items-center">
                    <input type="hidden" name="movieId" defaultValue={movieData?.id}/>
                    <AddFavouriteButton />
                </form>)
            }

            {isIncluded &&
                (<form action={deleteFavoriteAction} className="flex items-center">
                    <input type="hidden" name="movieId" defaultValue={movieData?.id}/>
                    <DeleteFavouriteButton />
                </form>)
            }
        </>
    )
}

const AddFavouriteButton = () => {
    const {pending} = useFormStatus();
    return (
        <button type="submit" disabled={pending}>
            <IoAddCircleOutline size={48}/>
        </button>
    )
}

const DeleteFavouriteButton = () => {
    const {pending} = useFormStatus();
    return (
        <button type="submit" disabled={pending}>
            <IoCheckmarkCircleOutline size={48}/>
        </button>
    )
}

export default FavouriteButton;