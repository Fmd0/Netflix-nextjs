import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import {MovieType} from "@/utils/type";


const useMovie = (id: string|null) => {
    const {data, error}: {data: MovieType, error: null|undefined} = useSWR(id?`/api/movies/${id}`:id, fetcher);
    return {
        data,
        error,
    }
}

export default useMovie;