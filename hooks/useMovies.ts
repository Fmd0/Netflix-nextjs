import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import {MovieType} from "@/utils/type";

const useMovies = () => {
    const {data, error}: {data: { movies: MovieType[] }, error: null|undefined}= useSWR('/api/movies/', fetcher);
    return {data, error};
}

export default useMovies;