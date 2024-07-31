'use client'
import Navbar from "@/components/home/Navbar";
import MainContent from "@/components/home/MainContent";
import MovieList from "@/components/common/MovieList";
import MoreInfoModal from "@/components/home/MoreInfoModal";
import {moviesMainContent, popularMovies} from "@/utils/data";
import Footer from "@/components/landing/Footer";
import useMoviesFavourites from "@/hooks/useMoviesFavourites";


const Page = () => {

    const {data:{movies: myListMovies}={movies: []}} = useMoviesFavourites();

    return (
        <>
            <Navbar />
            <MainContent movieData={moviesMainContent}/>
            <MovieList name="Popular on Netflix" movieList={popularMovies} />
            {/*<MovieList name="Trending Now" useMovies={useMovies} />*/}
            <MovieList name="My List" movieList={myListMovies} />
            <MoreInfoModal />
            <Footer />
        </>
    )
}

export default Page;