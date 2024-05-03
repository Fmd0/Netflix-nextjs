'use client'
import useSWR from "swr";
import fetcher from "@/libs/fetcher";
import {MovieType} from "@/types/movie";

const MyList = () => {
    const {data, error, isLoading}:{data: MovieType[], error: boolean|undefined, isLoading: boolean} = useSWR("/api/movies/favourites", fetcher);

    if(isLoading) {
        return null
    }

    if(error) {
        console.log(error);
        return null;
    }

    // console.log(data);

    if(data.length === 0) {
        return null;
    }

    return (
        <div className="px-10">
            <h3 className="text-xl font-bold">My List</h3>
        </div>
    )
}

export default MyList;