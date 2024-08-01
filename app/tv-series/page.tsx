'use client'
import Navbar from "@/components/home/Navbar";
import MainContent from "@/components/home/MainContent";
import MovieList from "@/components/common/MovieList";
import MoreInfoModal from "@/components/home/MoreInfoModal";
import Footer from "@/components/landing/Footer";
import useMoviesFavourites from "@/hooks/useMoviesFavourites";
import useMovies from "@/hooks/useMovies";


const Page = () => {

    const {data:{movies: myListMovies} = {movies: []}} = useMoviesFavourites("TVSeries");
    const {data:{movies: moviesMovies } = {movies: []}} = useMovies("TVSeries");

    return (
        <>
            <Navbar />
            <MainContent movieData={moviesMovies[0]}/>
            <MovieList name="Popular on Netflix" movieList={moviesMovies} />
            {/*<MovieList name="Trending Now" useMovies={useMovies} />*/}
            <MovieList name="My List" movieList={myListMovies} />
            <MoreInfoModal />
            <Footer />
        </>
    )
}

export default Page;