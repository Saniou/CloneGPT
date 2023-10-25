'use client'

import { signIn } from "next-auth/react"
import Image from "next/image"

function Login() {
    return (
        <div className="h-screen justify-center items-center flex flex-col text-center bg-gradient-to-r from-cyan-800 via-white to-cyan-800 animate-gradient">
            <Image
                className="animate-spinner"
                src='/ChatGPT.svg'
                width={300}
                height={300}
                alt="logo"
            />
            <button className="text-2xl animate-bounce font-bold " onClick={() => signIn('google')}>
                Sign in to use ChatGPT
            </button>
        </div>
    )
}

export default Login;