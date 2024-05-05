'use client'
import useSWR from "swr";
import fetcher from "@/libs/fetcher";
import {MovieType} from "@/types/movie";
import React from "react";
import MovieCard from "@/components/MovieCard";

const MyList = () => {
    const {data={movies: []}, error} = useSWR("/api/movies/favourites", fetcher);


    if(error) {
        console.log(error);
        return null;
    }

    // if(data?.movies.length === 0) {
    //     return (
    //         <div className="p-10">
    //             <h3 className="text-xl font-bold">My List</h3>
    //             <div className="mt-4 mb-16 grid grid-cols-4 grid-rows-[200px] gap-4 items-center">
    //                 {data?.movies.map((d: MovieType) => <MovieCard key={d.id} d={d}/>)}
    //             </div>
    //         </div>
    //     )
    // }

    return (
        <div className="p-10">
            <h3 className="text-xl font-bold">My List</h3>
            <div className="mt-4 mb-16 grid grid-cols-4 grid-rows-[200px] gap-4 items-center">
                {data?.movies.map((d: MovieType) => <MovieCard key={d.id} d={d} /> )}
            </div>
        </div>
    )
}


export default MyList;