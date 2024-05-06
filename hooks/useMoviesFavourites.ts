import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useMoviesFavourites = () => {
    const {data, error}  = useSWR("/api/movies/favourites", fetcher);
    return {data, error};
}

export default useMoviesFavourites;