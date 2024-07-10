import useSWR from "swr";
import fetcher from "@/utils/fetcher";

const useMoviesFavourites = () => {
    const {data, error}  = useSWR("/api/movies/favourites", fetcher);
    return {data, error};
}

export default useMoviesFavourites;