import useSWR from "swr";
import fetcher from "@/utils/fetcher";


const useMovie = (id: string) => {
    const {data, error, mutate} = useSWR(`/api/movies/${id}`, fetcher);
    return {
        data,
        error,
        mutate
    }
}

export default useMovie;