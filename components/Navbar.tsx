import Image from "next/image";
import {NavData} from "@/libs/data";
import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import Link from "next/link";




const Navbar = async () => {

    // const session = await auth()
    // console.log(session);
    return (
        <header className="fixed h-[100px] w-screen flex items-center justify-between px-10 flex-wrap">
            <div className="flex items-center gap-8">
                <Image src="/logo.png" alt="logo" width={1280} height={346} className='w-32'/>
                <ul className="flex items-center gap-6">
                    {
                        NavData.map((data) => (
                            <li key={data.id}><Link href={data.href}>{data.name}</Link></li>
                        ))
                    }
                </ul>
            </div>
            <div className="flex items-center gap-6">
                <IoSearchOutline className="text-xl"/>
                <IoNotificationsOutline className="text-xl"/>
                <div className="flex items-center gap-2">
                    <p>User</p>
                    <MdArrowDropDown className="text-lg"/>
                </div>
            </div>
        </header>
    )
}

export default Navbar;