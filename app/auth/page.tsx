'use client'

import {useState} from "react";
import { useFormState, useFormStatus } from "react-dom";
import {registerAndSignInAction, signInAction} from "@/utils/action";
import Image from "next/image";
import Link from "next/link";
import {signIn} from "next-auth/react";
import InputItem from "@/components/common/InputItem";

const Page = () => {

    const [isSignIn, setIsSignIn] = useState(true);

    const [registerAndSignInErrorMessage, registerAndSignInDispatch] = useFormState(registerAndSignInAction, null);
    const [signInError, signInDispatch] = useFormState(signInAction, null);

    const handleClick = () => {
        setIsSignIn(a => !a);
    }

    return (
        <main className="w-screen h-screen bg-black md:bg-[url('/auth/hero.jpg')] bg-center bg-cover bg-no-repeat bg-fixed">
            <div className="w-full h-full p-8 md:p-10 bg-black bg-opacity-50">

                <Link href="/landing">
                    <Image src='/auth/logo.png' alt='logo' width={1280} height={346} className='w-40 md:w-60'/>
                </Link>

                {/*signIn and signUp form*/}
                {
                    isSignIn && (
                        <div className="w-[90%] max-w-96 mt-20 bg-black mx-auto py-10 md:px-10">
                            <form className="text-white"
                                  action={signInDispatch}>
                                <h1 className='text-white text-3xl font-semibold'>Sign in</h1>

                                <div className="flex flex-col gap-4 mt-6 mb-4">
                                    <InputItem placeholder="Email address" inputName="email" inputType="email" />
                                    <InputItem placeholder="Password" inputName="password" inputType="password" />
                                </div>
                                {
                                    signInError && (
                                        <p className="text-red-600 mb-2 pl-1 text-[15px]">{signInError}</p>
                                    )
                                }

                                <SignInButton/>
                            </form>


                            <p className="text-center my-4 text-[16px] font-light text-[rgba(255,255,255,0.7)]">OR</p>

                            <div className=" grid grid-cols-2 gap-2">
                                <form action={async () => {
                                    await signIn("google");
                                }}>
                                    <button type="submit"
                                            className="bg-neutral-600 rounded-[8px] w-full h-full flex items-center justify-center gap-3 py-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 600 600"
                                             width="16" height="16">
                                            <path
                                                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                fill="#4285f4"/>
                                            <path
                                                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                fill="#34a853"/>
                                            <path
                                                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                fill="#fbbc04"/>
                                            <path
                                                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                fill="#ea4335"/>
                                        </svg>
                                        <p className="text-[14px]">Google</p>
                                    </button>
                                </form>

                                <form action={async () => {
                                    await signIn("github");
                                }}>
                                    <button type="submit"
                                            className="bg-neutral-600 rounded-[8px] w-full h-full flex items-center justify-center gap-3 py-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="1.25em"
                                             viewBox="0 0 1024 1024"
                                             width="1.25em">
                                            <path clipRule="evenodd"
                                                  d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                                                  fill="#1B1F23" fillRule="evenodd" transform="scale(64)"/>
                                        </svg>
                                        <p className="text-[14px] text-neutral-200">Github</p>
                                    </button>
                                </form>
                            </div>
                            <p className='mt-8 text-[14px] text-neutral-500 flex justify-center'>First time using
                                Netflix?
                                <button type='button' onClick={handleClick} className="text-white pl-1">Create an
                                    account.</button>
                            </p>
                        </div>
                    )
                }

                {
                    !isSignIn && (
                        <form
                            className="w-[90%] max-w-96 mt-20 bg-black mx-auto text-white md:p-10"
                            action={registerAndSignInDispatch}
                        >
                            <h1 className='text-white text-3xl font-semibold'>Register</h1>

                            <div className="flex flex-col gap-4 mt-6 mb-4">
                                <InputItem placeholder="Name" inputName="name" inputType="text" />
                                <InputItem placeholder="Email address" inputName="email" inputType="email" />
                                <InputItem placeholder="Password" inputName="password" inputType="password" />
                            </div>


                            {
                                registerAndSignInErrorMessage && (
                                    <p className='text-red-600 mb-2 pl-1 text-[15px]'>{registerAndSignInErrorMessage}</p>
                                )
                            }

                            <RegisterButton/>
                            <p className='text-[14px] text-neutral-500 mt-8 flex justify-center'>Already have a account?
                                <button type='button' onClick={handleClick} className="text-white pl-1">Sign In</button>
                            </p>
                        </form>
                    )
                }


            </div>
        </main>
    )
}


const SignInButton = () => {
    const {pending} = useFormStatus();
    return (
        <button className="w-full text-center py-2.5 text-white rounded-md duration-200 grid place-items-center bg-red-600"
                disabled={pending}
                type='submit'
        >
            {
                pending ?
                <div
                    className="size-6 animate-spin rounded-[50%] border-t-white border-x-white border-b-transparent border-[3px]">
                </div>
                : "Sign In"
            }

        </button>
    )
}

const RegisterButton = () => {
    const {pending} = useFormStatus();
    return (
        <button
            disabled={pending}
            className="w-full text-center py-2.5 rounded-md text-white grid place-items-center bg-red-600"
            type='submit'
        >
            {
                pending ?
                    <div
                        className="size-6 animate-spin rounded-[50%] border-t-white border-x-white border-b-transparent border-[3px]">
                    </div>
                    : "Sign Up"
            }
        </button>
    )
}

export default Page;