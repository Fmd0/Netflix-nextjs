import useSWR, {mutate} from "swr";
import fetcher from "@/utils/fetcher";
import {MovieType} from "@/utils/type";
import {KeyedMutator} from "swr/_internal";

const useMoviesFavourites = (type: string) => {
    const {data, error}:
        {
            data: {movies: MovieType[]},
            error: null|undefined
            mutate: KeyedMutator<null>
        }  = useSWR(`/api/movies/favourites?type=${type}`, fetcher);
    return {data, error};
}

export const mutateMoviesFavourites = async (type: string) => {
    await mutate(`/api/movies/favourites?type=${type}`);
}

export default useMoviesFavourites;