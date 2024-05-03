'use client'
import {IoPlay} from "react-icons/io5";
import Link from "next/link";
import { IoAddCircleOutline } from "react-icons/io5";
import {addFavouriteAction} from "@/libs/action";
import useSWR from "swr";
import fetcher from "@/libs/fetcher";
import {useMoreInfoStore} from "@/hooks/useMoreInfoStore";
import { IoCloseOutline } from "react-icons/io5";


const MoreInfoModal = () => {

    const moreInfoModalIndex = useMoreInfoStore(state => state.moreInfoModalIndex);
    const {data, error, isLoading} = useSWR(`/api/movies/${moreInfoModalIndex}`, fetcher);
    const clearMoreInfoModal = useMoreInfoStore(state => state.clearMoreInfoModal)

    if(!moreInfoModalIndex) {
        return null;
    }

    if(isLoading) {
        return null;
    }

    if(error) {
        console.log(error);
        return null;
    }

    // console.log(data);

    return (
        <div className={"w-screen h-screen bg-black bg-opacity-80 fixed left-0 top-0 z-[2] grid place-items-center"}>
            <div className="w-[800px] h-[600px] bg-black relative rounded-xl">
                <div className="h-[400px] bg-transparent relative z-[1] flex items-end justify-start p-10">
                    <div>
                        <h1 className='text-3xl font-bold mb-5' >{data.title}</h1>
                        <div className="flex gap-4 items-center">
                            <Link href="/" className="bg-gray-100 text-black rounded-md py-2 px-4 flex items-center gap-1">
                                <IoPlay size={22} />
                                Play
                            </Link>
                            <form action={addFavouriteAction} className="flex items-center">
                                <input type="hidden" name="movieId" value={data.id}/>
                                <button type="submit">
                                    <IoAddCircleOutline size={36} />
                                </button>
                            </form>
                        </div>
                    </div>
                    <video src="/BigBuckBunny.mp4" autoPlay muted className="rounded-xl absolute block z-[-1] top-0 left-0 opacity-50 w-full h-full object-cover object-center"></video>
                </div>

                <div className="bg-gray-900 p-10">
                    <p className="mb-5">
                        <span className="text-green-500 pr-2">New</span> {data.duration+" "+data.genre}
                    </p>
                    <p>{data.description}</p>
                </div>
                <IoCloseOutline size={28} className="text-gray-100 absolute z-[2] top-1 right-1 cursor-pointer" onClick={clearMoreInfoModal} />
            </div>
        </div>
    )
}

export default MoreInfoModal