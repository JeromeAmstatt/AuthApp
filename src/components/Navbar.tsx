import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className='flex justify-center items-center'>
            <nav className="flex w-full max-w-6xl mx-auto py-4 px-8 bg-white dark:bg-zinc-900 shadow-md">
                <div className="flex items-center space-x-4">
                    <button className='rounded-lg p-2 font-bold text-lg text-black hover:bg-[#16a249] hover:text-white'>
                        <Link href="/">Dev&apos;Aura</Link>
                    </button>
                    <button className='rounded-lg p-2 text-lg text-black hover:bg-[#16a249] hover:text-white'>
                    <Link href="/signup">Inscription</Link>
                    </button>
                    <button className='rounded-lg p-2 text-lg text-black hover:bg-[#16a249] hover:text-white'>
                    <Link href="/signin">Connexion</Link>
                    </button>
                </div>

            </nav>
        </div>
    )
}