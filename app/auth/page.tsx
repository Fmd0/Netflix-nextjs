'use client'

import {useState} from "react";
import { useFormState, useFormStatus } from "react-dom";
import {registerAndSignInAction, signInAction} from "@/libs/action";
import Image from "next/image";

const Page = () => {

    const [isSignIn, serIsSignIn] = useState(true);

    const [registerAndSignInErrorMessage, registerAndSignInDispatch] = useFormState(registerAndSignInAction, null);
    const [signInError, signInDispatch] = useFormState(signInAction, null);

    const handleClick = () => {
        serIsSignIn(a => !a);
    }


    return (
        <main className="w-screen h-screen bg-[url('/auth/hero.jpg')] bg-center bg-cover bg-no-repeat bg-fixed">
            <div className="w-full h-full bg-opacity-50 bg-black p-10">
                <Image src='/auth/logo.png' alt='logo' width={1280} height={346} className='w-60'/>
                {
                    isSignIn && (
                        <form
                            className="w-96 bg-black p-10 mx-auto text-black"
                            action={signInDispatch}
                        >
                            <h1 className='text-white text-3xl font-semibold'>Sign in</h1>

                            <input
                                className="bg-neutral-700 block w-full p-3 outline-0 mt-8 mb-4 rounded-md text-white"
                                type="email"
                                name="email"
                                placeholder="Email address"
                                required
                            />

                            <input
                                className="bg-neutral-700 block w-full p-3 outline-0 mt-4 mb-8 rounded-md text-white"
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                            />

                            {
                                signInError && (
                                    <p className="text-red-800 mb-2">{signInError}</p>
                                )
                            }

                            <SignInButton />
                            <p className='text-[14px] text-neutral-500 mt-8 flex justify-center'>First time using Netflix?
                                <button type='button' onClick={handleClick} className="text-white pl-1">Create an account.</button>
                            </p>
                        </form>
                    )
                }

                {
                    !isSignIn && (
                        <form
                            className="w-96 bg-black p-10 mx-auto text-black"
                            action={registerAndSignInDispatch}
                        >
                            <h1 className='text-white text-3xl font-semibold'>Register</h1>

                            <input
                                className="bg-neutral-700 block w-full p-3 outline-0 mt-8 mb-4 rounded-md text-white"
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                            />

                            <input
                                className="bg-neutral-700 block w-full p-3 outline-0 mt-4 mb-4 rounded-md text-white"
                                type="email"
                                name="email"
                                placeholder="Email address"
                                required
                            />

                            <input
                                className="bg-neutral-700 block w-full p-3 outline-0 mt-4 mb-8 rounded-md text-white"
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                            />

                            {
                                registerAndSignInErrorMessage && (
                                    <p className='text-white'>{registerAndSignInErrorMessage}</p>
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
        <button
            disabled={pending}
            className="block w-full bg-red-600 text-center p-2 rounded-md text-white"
            type='submit'
        >
            Sign In
        </button>
    )
}

const RegisterButton = () => {
    const {pending} = useFormStatus();
    return (
        <button
            disabled={pending}
            className="block w-full bg-red-600 text-center p-2 rounded-md text-white"
            type='submit'
        >
            Register
        </button>
    )
}

export default Page;