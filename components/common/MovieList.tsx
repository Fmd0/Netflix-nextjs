'use client'
import MovieCard from "@/components/common/MovieCard";
import {MovieType} from "@/utils/type";


const MovieList = ({name, movieList}: {
    name: string,
    movieList: MovieType[],
}) => {


    return (
        <div className="p-10 mt-6 lg:mt-8">
            <h3 className="text-[26px] font-bold">{name}</h3>
            <div
                className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-rows-[250px] md:auto-rows-[250px] auto-rows-auto gap-8 items-center">
                {movieList?.map((d, index) => <MovieCard key={index} movieData={d}/>)}
            </div>
        </div>
    )
}

export default MovieList;
