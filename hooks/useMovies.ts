import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import {MovieType} from "@/utils/type";

const useMovies = (type: string) => {
    const {data, error}: {data: { movies: MovieType[] }, error: null|undefined}= useSWR(`/api/movies?type=${type}`, fetcher);
    return {data, error};
}

export default useMovies;