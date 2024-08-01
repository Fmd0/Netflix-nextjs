'use client'
import Navbar from "@/components/home/Navbar";
import MainContent from "@/components/home/MainContent";
import MoreInfoModal from "@/components/home/MoreInfoModal";
import MovieList from "@/components/common/MovieList";
import useMovies from "@/hooks/useMovies";
import useMoviesFavourites from "@/hooks/useMoviesFavourites";
import useRandomMovie from "@/hooks/useRandomMovie";
import Footer from "@/components/landing/Footer";


const Page = () => {

    const {data:{movies: trendingNowMovies}={movies: []}} = useMovies("Cartoon");
    const {data:{movies: myListMovies}={movies: []}} = useMoviesFavourites("Cartoon");
    const {data: randomMovieData} = useRandomMovie();


    return (
        <>
            <Navbar />
            <MainContent movieData={randomMovieData} />
            <MovieList name="Trending Now" movieList={trendingNowMovies} />
            <MovieList name="My List" movieList={myListMovies} />
            <MoreInfoModal />
            <Footer />
        </>
    )
}

export default Page;