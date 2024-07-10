import useSWR, {mutate} from "swr";
import fetcher from "@/utils/fetcher";
import {MovieType, UserType} from "@/utils/type";


const useUser = () => {
    const {data, error}: {
        data: UserType,
        error: null|undefined
    } = useSWR('/api/user', fetcher);
    return {data, error};
}

export const mutateUser = async () => {
    await mutate('/api/user');
}

export default useUser;