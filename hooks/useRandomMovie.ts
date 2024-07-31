
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import {MovieType} from "@/utils/type";


const useRandomMovie = () => {
    const {data, error}: {data: MovieType, error: null|undefined} = useSWR(`/api/movies/random`, fetcher);
    return {
        data,
        error,
    }
}

export default useRandomMovie;