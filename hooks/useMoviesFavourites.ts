import useSWR, {mutate} from "swr";
import fetcher from "@/utils/fetcher";
import {MovieType} from "@/utils/type";
import {KeyedMutator} from "swr/_internal";

const useMoviesFavourites = () => {
    const {data, error}:
        {
            data: {movies: MovieType[]},
            error: null|undefined
            mutate: KeyedMutator<null>
        }  = useSWR("/api/movies/favourites", fetcher);
    return {data, error};
}

export const mutateMoviesFavourites = async () => {
    await mutate("/api/movies/favourites");
}

export default useMoviesFavourites;