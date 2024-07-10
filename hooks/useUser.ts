import useSWR from "swr";
import fetcher from "@/utils/fetcher";


const useUser = () => {
    const {data, error} = useSWR('/api/user', fetcher);
    return {data, error};
}

export default useUser;