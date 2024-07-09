'use client'
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import {useState} from "react";
import { MdOutlineClose, MdAdd } from "react-icons/md";
import {questions} from "@/libs/data";




const Page = () => {

    const [showDropDown, setShowDropDown] = useState("")

    return (
        <>

            {/*hero part*/}
            <header className="h-[60vh] lg:h-[80vh] w-full bg-[url('/landing/headerBg.jpg')] bg-center bg-cover">
                <div className="w-full h-full bg-black bg-opacity-50">

                    <nav className="w-[90%] lg:w-[80%] mx-auto h-[80px] flex items-center justify-between">
                        <Image src="/landing/logo.png" alt="logo" width={1280} height={346} className="w-32 lg:w-36"/>
                        <Link href="/auth" className="bg-red-600 py-2 px-4 rounded-md text-[13px]">
                            Sign In
                        </Link>
                    </nav>

                    <div className="text-center h-[calc(60vh-80px)] lg:h-[calc(80vh-80px)] grid place-items-center">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Unlimited movies, TV shows, and anime</h1>
                            <h3 className="text-xl lg:text-[24px] mb-4">Watch anywhere. Cancel anytime.</h3>
                            <p className="text-lg mb-8">Ready to watch? Enter your email to create or restart your
                                membership</p>
                            <Link href="/auth"
                                  className="bg-red-600 py-2 lg:py-4 rounded-[3px] w-40 lg:w-48 text-lg lg:text-xl font-bold flex items-center justify-center mx-auto">
                                Get Started <FaAngleRight className="text-white ml-2"/>
                            </Link>
                        </div>
                    </div>

                </div>
            </header>


            {/*showcase list starts*/}
            <div className="border-b-[10px] border-b-neutral-800">
                <div className="w-[90%] lg:w-[80%] flex flex-col items-center mx-auto p-10 lg:pt-12 lg:pb-20 lg:grid lg:items-center lg:justify-items-center lg:grid-cols-2">
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Enjoy on your TV</h1>
                        <p className="text-xl lg:text-2xl">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
                            players, and more.</p>
                    </div>

                    <div className="relative">
                        <Image src="/landing/tv.png" alt="tv" width={640} height={480} className="w-[480px] lg:w-[540px] relative"/>
                        <video src="/landing/tv.m4v" autoPlay playsInline loop muted className="absolute z-[-1] w-[73%] top-[20%] left-[13%]"/>
                    </div>
                </div>
            </div>


            <div className="border-b-[10px] border-b-neutral-800">
                <div className="w-[90%] lg:w-[80%] flex flex-col items-center mx-auto p-10 lg:p-20 lg:grid lg:items-center lg:justify-items-center lg:grid-cols-2">

                    <div className="relative">
                        <Image src="/landing/threeDevices.png" alt="tv" width={640} height={480} className="w-[480px] lg:w-[540px]"/>
                        <video src="/landing/threeDevices.m4v" autoPlay playsInline loop muted className="absolute w-[61%] top-[10%] left-[19%] z-[-1]" />
                    </div>
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Watch everywhere</h1>
                        <p className="text-xl lg:text-2xl">Stream unlimited movies and TV shows on your phone, tablet, laptop, and
                            TV.</p>
                    </div>
                </div>
            </div>

            <div className="border-b-[10px] border-b-neutral-800">
                <div
                    className="w-[90%] lg:w-[80%] flex flex-col items-center mx-auto p-10 lg:p-20 lg:grid lg:items-center lg:justify-items-center lg:grid-cols-2">

                    <div>
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Create profiles for kids</h1>
                        <p className="text-xl lg:text-2xl">Send kids on adventures with their favorite characters in a space made
                            just for them—free with your membership.</p>
                    </div>
                    <Image src="/landing/kids.png" alt="tv" width={640} height={480} className="w-[480px] lg:w-[540px]"/>
                </div>
            </div>

            <div className="border-b-[10px] border-b-neutral-800">
                <div
                    className="w-[90%] lg:w-[80%] flex flex-col items-center mx-auto p-10 lg:p-20 lg:grid lg:items-center lg:justify-items-center lg:grid-cols-2">

                    <div className="relative">
                        <Image src="/landing/download.jpg" alt="tv" width={640} height={480} className="w-[480px] lg:w-[540px]"/>
                        <div className="absolute bottom-2 left-[23%] w-[55%] grid grid-cols-[auto_1fr_auto] gap-4 items-center bg-black px-4 py-2 border-2 border-neutral-500 rounded-lg">
                            <Image src="/landing/downloadMovie.png" alt="download" width={150} height={210}
                                   className="w-[40px] lg:w-[52px]" />
                            <div>
                                <p className="font-semibold text-[15px] lg:text-[16px]">Stranger Things</p>
                                <p className="text-blue-500 text-[13px] lg:text-[14px]">Downloading...</p>
                            </div>
                            <Image src="/landing/download.gif" alt="download" width={100} height={100}
                                   className="w-[36px] lg:w-[48px]" />
                        </div>
                    </div>


                    <div>
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Download your shows to watch offline</h1>
                        <p className="text-xl lg:text-2xl">Watch on a plane, train, or submarine...</p>
                    </div>
                </div>
            </div>


            {/*question list*/}
            <div>
                <div className="w-[80%] mx-auto py-20">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-center">Frequently Asked Questions</h1>

                    {questions.map(question => (
                        <div className="mb-2 text-xl lg:text-2xl" key={question.question}>
                            <div className="flex justify-between items-center mb-[2px] bg-neutral-800 p-6 cursor-pointer hover:bg-neutral-700"
                                onClick={() => setShowDropDown(a => a === question.question ? "" : question.question)}
                            >
                                {question.question}
                                {showDropDown === question.question ? <MdOutlineClose className="text-[32px] lg:text-[38px]" /> : <MdAdd className="text-[34px] lg:text-[38px]" />}
                            </div>

                            <div className={`bg-neutral-800 overflow-hidden transition-all duration-[400ms] 
                            ${showDropDown === question.question ? "max-h-[600px]" : "max-h-0"}`}>
                                <p className="p-6 duration-300" dangerouslySetInnerHTML={{__html: question.answer}} ></p>
                            </div>
                        </div>))
                    }
                </div>
            </div>


            {/*bottom button*/}
            <div className="border-b-neutral-800 mb-20">
                <div className="w-[80%] mx-auto text-center py-20">
                    <p className="text-xl lg:text-2xl mb-8">Ready to watch? Enter your email to create or restart your
                        membership</p>
                    <Link href="/auth"
                          className="bg-red-600 py-2 lg:py-4 rounded-[3px] w-40 lg:w-48 text-lg lg:text-xl font-bold flex items-center justify-center mx-auto">
                        Get Started <FaAngleRight className="text-white ml-2"/>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Page;