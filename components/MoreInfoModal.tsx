'use client'
import {IoPlay} from "react-icons/io5";
import Link from "next/link";
import { IoAddCircleOutline } from "react-icons/io5";
import {addFavouriteAction, removeFavouriteAction} from "@/libs/action";
import useSWR from "swr";
import fetcher from "@/libs/fetcher";
import {useMoreInfoStore} from "@/hooks/useMoreInfoStore";
import { IoCloseOutline } from "react-icons/io5";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import clsx from "clsx";



const MoreInfoModal = () => {

    const moreInfoModalIndex = useMoreInfoStore(state => state.moreInfoModalIndex);
    const {data: movieData, error: movieError, isLoading: movieIsLoading} =
        useSWR(`/api/movies/${moreInfoModalIndex}`, fetcher);

    const {data: userData, error, isLoading} =
        useSWR("/api/user", fetcher);

    const clearMoreInfoModal = useMoreInfoStore(state => state.clearMoreInfoModal)


    // if(!moreInfoModalIndex) {
    //     return null;
    // }

    // if(movieIsLoading || isLoading) {
    //     return null;
    // }
    //
    if(movieError || error) {
        console.log(error);
        // return null;
    }


    return (
        <div className={clsx("w-screen h-screen bg-black bg-opacity-80 fixed z-[2] left-0 top-0 grid place-items-center transition-all duration-300",
            moreInfoModalIndex?"visible":"invisible"
            )}>
            <div className={clsx("w-[800px] h-[600px] bg-black relative rounded-xl transition-all duration-300",
                moreInfoModalIndex?"scale-100":"scale-0")}>
                <div className="h-[400px] bg-transparent relative flex items-end justify-start p-10">
                    <div>
                        <h1 className='text-3xl font-bold mb-5' >{movieData?.title}</h1>
                        <div className="flex gap-4 items-center">
                            <Link href="/" className="bg-gray-100 text-black rounded-md py-2 px-4 flex items-center gap-1">
                                <IoPlay size={22} />
                                Play
                            </Link>

                            {!userData?.movieIds.includes(movieData?.id) &&
                                (<form action={addFavouriteAction} className="flex items-center">
                                    <input type="hidden" name="movieId" value={movieData?.id}/>
                                    <button type="submit">
                                        <IoAddCircleOutline size={36} />
                                    </button>
                                </form>)
                            }
                            {userData?.movieIds.includes(movieData?.id) &&
                                (<form action={removeFavouriteAction} className="flex items-center">
                                    <input type="hidden" name="movieId" value={movieData?.id}/>
                                    <button type="submit">
                                        <IoCheckmarkCircleOutline size={36} />
                                    </button>
                                </form>)
                            }
                        </div>
                    </div>
                    <video src="/BigBuckBunny.mp4" autoPlay muted className="rounded-t-xl absolute block z-[-1] top-0 left-0 opacity-50 w-full h-full object-cover object-center"></video>
                </div>

                <div className="bg-gray-900 p-10 h-[200px]">
                    <p className="mb-5">
                        <span className="text-green-500 pr-2">New</span> {movieData?.duration+" "+movieData?.genre}
                    </p>
                    <p>{movieData?.description}</p>
                </div>
                <IoCloseOutline size={28} className="text-gray-100 absolute z-[2] top-1 right-1 cursor-pointer" onClick={clearMoreInfoModal} />
            </div>
        </div>
    )
}

export default MoreInfoModal