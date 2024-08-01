'use client'
import Navbar from "@/components/home/Navbar";
import MoreInfoModal from "@/components/home/MoreInfoModal";
import MovieList from "@/components/common/MovieList";
import useMoviesFavourites from "@/hooks/useMoviesFavourites";


const Page = () => {

    const {data:{movies: myListMovies}={movies: []}} = useMoviesFavourites("");

    return (
        <>
            <Navbar />
            <div className="h-12"></div>
            <MovieList name="My List" movieList={myListMovies} />
            <MoreInfoModal />
        </>
    )
}

export default Page;