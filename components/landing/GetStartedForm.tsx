'use client'
import {FaAngleRight} from "react-icons/fa6";
import {useState} from "react";
import {signIn} from "next-auth/react";

const GetStartedForm = () => {

    const [hasBeenInput, setHasBeenInput] = useState(false);
    const [isOnFocus, setIsOnFocus] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [isSendEmailSuccess, setIsSendEmailSuccess] = useState(false);

    return (
        <form action={async () => {
            await signIn("resend", {
                email: inputValue,
                redirect: false,
            });
            setIsSendEmailSuccess(true);
        }} className="w-4/5 max-w-[600px] mx-auto flex gap-2">

            <div className={`relative flex-1 border-[1px] rounded-[4px] duration-200
            ${hasBeenInput?"bg-[rgba(70,90,126,0.4)]":"bg-[rgba(22,22,22,0.6)]"}
            ${isSendEmailSuccess?"border-green-500":"border-neutral-500"}
            `}>
                <input className="relative z-10 bg-transparent text-[14px] lg:text-[16px] text-white w-full h-full pt-6 px-4 pb-2 rounded-[4px] duration-200 focus:outline focus:outline-2 focus:outline-white outline-offset-2"
                       type="email"
                       name="email"
                       autoComplete="off"
                       onFocus={() => {
                           setHasBeenInput(true);
                           setIsOnFocus(true);
                       }}
                       onBlur={() => {
                           setIsOnFocus(false);
                       }}
                       onChange={(e) => {
                           setInputValue(e.target.value);
                           setIsSendEmailSuccess(false)
                       }}
                       required
                />
                <div className={`absolute left-4 text-neutral-200 duration-200
                ${isOnFocus||inputValue!==""?"top-1 text-[10px] lg:text-[12px]":"top-1/2 -translate-y-1/2 text-[16px] lg:text-[17px]"}
                `}>Email address</div>

                <div className={`${isSendEmailSuccess?"":"hidden"} absolute top-[calc(100%+4px)] left-1 text-start text-green-500 text-[12px]`}>A sign in link has been sent to your email address.</div>
            </div>

            <button className="bg-[rgb(229,9,20)] duration-300 hover:bg-[rgb(193,17,25)] py-2 lg:py-3 px-6 rounded-[4px] text-lg lg:text-xl font-bold flex items-center"
                    type="submit"
            >
                <p>Get Started</p>
                <FaAngleRight className="text-white ml-2"/>
            </button>
        </form>
    )
}

export default GetStartedForm;