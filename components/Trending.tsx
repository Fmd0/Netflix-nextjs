'use client'
import useSWR from "swr";
import fetcher from "@/libs/fetcher";
import {MovieType} from "@/types/movie";
import Image from "next/image";


const Trending = () => {

    const {data, error, isLoading}: {data: MovieType[], isLoading: boolean, error: boolean|undefined} = useSWR('/api/movies', fetcher);

    if (isLoading) {
        return null;
    }

    if(error) {
        return (
            <p>error</p>
        )
    }

    return (
        <div className="p-10">
            <h3 className="text-xl font-bold">Trending Now</h3>
            <div className="mt-4 grid grid-cols-4 grid-rows-[180px] gap-4">
                {data.map(d => (
                    <div key={d.id}>
                        <img className="w-full h-full object-cover rounded-lg" src={d.thumbnailUrl} alt="thumbnailUrl"/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Trending;