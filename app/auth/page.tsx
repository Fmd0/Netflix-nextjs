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
            <div className="w-full h-full bg-opacity-50 bg-black">
                <Image src='/auth/logo.png' alt='logo' width={1280} height={346} className='w-60'/>
                {
                    isSignIn && (
                        <form
                            className="w-96 bg-black p-4 mx-auto text-black"
                            action={signInDispatch}
                        >
                            <h1 className='text-white'>Sign in</h1>

                            <input
                                className="block w-full p-1"
                                type="email"
                                name="email"
                                placeholder="Email address"
                                required
                            />

                            <input
                                className="block w-full p-1"
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                            />

                            {
                                signInError && (
                                    <p className="text-white">{signInError}</p>
                                )
                            }

                            <SignInButton />
                            <p className='text-white'>{"Don't have a account."}
                                <button type='button' onClick={handleClick}>Register</button>
                            </p>
                        </form>
                    )
                }

                {
                    !isSignIn && (
                        <form
                            className="w-96 bg-black p-4 mx-auto text-black"
                            action={registerAndSignInDispatch}
                        >
                            <h1 className='text-white'>Register</h1>

                            <input
                                className="block w-full p-1"
                                type="email"
                                name="email"
                                placeholder="Email address"
                                required
                            />

                            <input
                                className="block w-full p-1"
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

                            <RegisterButton />
                            <p className='text-white'>Already have a account.
                                <button type='button' onClick={handleClick}>SignIn</button>
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
            className="block w-full bg-red-500 text-center"
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
            className="block w-full bg-red-500 text-center"
            type='submit'
        >
            Register
        </button>
    )
}

export default Page;