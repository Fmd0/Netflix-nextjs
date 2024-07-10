'use client'
import Navbar from "@/components/home/Navbar";
import MainContent from "@/components/home/MainContent";
import MoreInfoModal from "@/components/home/MoreInfoModal";
import MovieList from "@/components/common/MovieList";
import useMovies from "@/hooks/useMovies";
import useMoviesFavourites from "@/hooks/useMoviesFavourites";
import Footer from "@/components/landing/Footer";


const Page = () => {

    return (
        <>
            <Navbar />
            <MainContent />
            <MovieList name="Trending Now" useMovies={useMovies} />
            <MovieList name="My List" useMovies={useMoviesFavourites} />
            <MoreInfoModal />
        </>
    )
}

export default Page;