'use client'
import Image from "next/image";
import {NavData} from "@/utils/data";
import { IoSearchOutline, IoNotificationsOutline } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import Link from "next/link";
import {useEffect, useState} from "react";
import clsx from "clsx";
import {signOut} from "next-auth/react";
import {useMoreInfoStore} from "@/hooks/useMoreInfoStore";
import useUser from "@/hooks/useUser";




const Navbar = () => {
    const {
        signOutModalOpen,
        toggleSignOutModal,
        closeAllModal,
    } = useMoreInfoStore();
    const [showBackground, setShowBackground] = useState(false);
    const [showBrowserBar, setShowBrowserBar] = useState(false);

    const {data: userData, error: userError} = useUser();

    useEffect(() => {
        window.addEventListener("click", closeAllModal);
        return () => window.removeEventListener("click", closeAllModal);
    }, [closeAllModal]);

    useEffect(() => {
        let isThrottle = false;
        const handleScroll = () => {
            if(isThrottle) {
                return;
            }
            isThrottle = true;
            if (window.scrollY >= 60) {
                setShowBackground(true)
            } else {
                setShowBackground(false)
            }
            setTimeout(() => {
                isThrottle = false;
            }, 30);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    if(userError) {
        return null;
    }

    return (
        <header className={clsx("fixed z-[1] duration-200 w-screen top-0 left-0 flex items-center justify-between p-4 lg:p-10 flex-wrap",
                showBackground? "bg-black bg-opacity-70": ""
                )}>
            <div className="flex items-center gap-8">
                <Image src="/logo.png" alt="logo" width={1280} height={346} className='w-24 lg:w-32 '/>

                <ul className="hidden items-center gap-6 lg:flex">
                    {
                        NavData.map((data) => (
                            <li key={data.id}><Link href={data.href}>{data.name}</Link></li>
                        ))
                    }
                </ul>

                <div className="relative lg:hidden">
                    <button className="flex items-center" onClick={() => setShowBrowserBar(a=> !a)} >
                        Browser <MdArrowDropDown size={32} className={clsx("transition-all duration-300",
                        showBrowserBar?"rotate-180":"rotate-0"
                        )} />
                    </button>
                    <ul className={clsx("flex flex-col w-56 items-center gap-4 absolute top-10 left-0 bg-black px-4 py-6",
                        showBrowserBar?"visible":"invisible"
                        )}>
                        {
                            NavData.map((data) => (
                                <li key={data.id}><Link href={data.href}>{data.name}</Link></li>
                            ))
                        }
                    </ul>
                </div>

            </div>
            <div className="flex items-center gap-6">
                <IoSearchOutline className="text-xl"/>
                <IoNotificationsOutline className="text-xl"/>

                {/*user button*/}
                <div className="relative" onClick={e => e.stopPropagation()}>
                    <div className="flex items-center gap-2 cursor-pointer" onClick={toggleSignOutModal}>
                        <p>{userData?.name||userData?.email?.slice(0,3)||""}</p>
                        <MdArrowDropDown size={32} className={clsx("text-lg transition-all duration-300",
                            signOutModalOpen ? "rotate-180" : "rotate-0"
                        )}/>
                    </div>


                    {/*sign out modal*/}
                    <div className={clsx("bg-black absolute top-10 right-0 w-56 h-32 border-2 border-gray-800 z-[1]",
                        signOutModalOpen ? "block" : "hidden"
                    )}>
                        <div className="h-[55%] flex items-center p-4 border-b-gray-600 border-b-2">
                            <p>{userData?.name || userData?.email?.slice(0, 3) || ""}</p>
                        </div>
                        <div className="h-[45%] text-sm grid place-items-center p-4">
                            <button type="button" onClick={() => signOut()}>
                                Sign out of Netflix
                            </button>
                        </div>

                    </div>
                </div>


            </div>
        </header>
    )
}

export default Navbar;