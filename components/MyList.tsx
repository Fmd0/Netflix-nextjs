'use client'
import {MovieType} from "@/types/movie";
import React from "react";
import MovieCard from "@/components/MovieCard";
import useMoviesFavourites from "@/hooks/useMoviesFavourites";

const MyList = () => {
    const {data={movies: []}, error} = useMoviesFavourites();

    if(error) {
        console.log(error);
        return null;
    }



    return (
        <div className="p-10">
            <h3 className="text-xl font-bold">My List</h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-rows-[200px] auto-rows-auto gap-8 items-center">
                {data?.movies.map((d: MovieType) => <MovieCard key={d.id} d={d}/>)}
            </div>
        </div>
    )
}


export default MyList;