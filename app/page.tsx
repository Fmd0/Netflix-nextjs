import Navbar from "@/components/Navbar";
import MainContent from "@/components/MainContent";
import Trending from "@/components/Trending";
import VideoFullScreen from "@/components/VideoFullScreen";


const Page = () => {
  return (
      <>
          <Navbar />
          <VideoFullScreen />
          <MainContent />
          <Trending />
      </>
  )
}

export default Page;