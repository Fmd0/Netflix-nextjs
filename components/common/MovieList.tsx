'use client'
import MovieCard from "@/components/common/MovieCard";
import {MovieType} from "@/utils/type";


const MovieList = ({name, useMovies}: {
    name: string,
    useMovies: () => {data: {movies: MovieType[]}, error: null | undefined}
}) => {

    const {data:{movies}={movies: []}, error} = useMovies();

    if(error) {
        return null;
    }

    return (
        <div className="p-10 mt-6 lg:mt-10">
            <h3 className="text-xl font-bold">{name}</h3>
            <div
                className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-rows-[200px] auto-rows-auto gap-8 items-center">
                {movies.map((d) => <MovieCard key={d.id} movieData={d}/>)}
            </div>
        </div>
    )
}

export default MovieList;
