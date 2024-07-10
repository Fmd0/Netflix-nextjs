'use client'
import Navbar from "@/components/Navbar";
import MainContent from "@/components/MainContent";
import Trending from "@/components/Trending";
import MyList from "@/components/MyList";
import MoreInfoModal from "@/components/MoreInfoModal";


const Page = () => {

    return (
        <>
            <Navbar />
            <MainContent />
            <Trending />
            <MyList />
            <MoreInfoModal />
        </>
    )
}

export default Page;