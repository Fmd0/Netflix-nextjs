import Link from "next/link";
import { IoPlay } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";


const MainContent = () => {
    return (
        <main className="w-screen h-screen flex items-center px-10 relative top-20">
            <div className='max-w-[500px]'>
                <h1 className='text-5xl font-bold'>Big Buck Bunny</h1>
                <p className="mt-8">Three rodents amuse themselves by harassing creatures of the forest. However, when they mess with a bunny, he decides to teach them a lesson.</p>
                <div className="flex items-center mt-4 gap-4">
                    <Link href="/" className="bg-gray-100 text-black rounded-md py-2 px-4 flex items-center gap-1">
                        <IoPlay size={22} />
                        Play
                    </Link>
                    <Link href="/" className="bg-gray-100 bg-opacity-30 text-white rounded-md py-2 px-4 flex items-center gap-1">
                        <IoInformationCircleOutline size={22} />
                        More Info
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default MainContent;