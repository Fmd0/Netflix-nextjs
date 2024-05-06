import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useMovies = () => {
    const {data, error} = useSWR('/api/movies/', fetcher);

    return {data, error};
}

export default useMovies;