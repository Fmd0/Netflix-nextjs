import useSWR from "swr";
import fetcher from "@/utils/fetcher";


const useMovie = (id: string|null) => {
    const {data, error} = useSWR(id?`/api/movies/${id}`:id, fetcher);
    return {
        data,
        error,
    }
}

export default useMovie;