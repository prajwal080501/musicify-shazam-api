import React, { useState } from 'react'
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import Image from 'next/image';
import bg from "../../Assets/bg.jpg"
import Link from "next/link"
const Hero = ({ isOpen, setIsOpen, handleOpen }) => {

    return (
        <>

            <div className='w-screen bg-red-400 h-[100vh] top-1/2 flex flex-col justify-items-center'>
                <div className='relative h-full w-full'>
                <Image src={bg} layout="fill" className=' acc' objectFit='cover'/>
                </div>
                <div className="flex absolute top-0 items-center justify-items-center">
                    <svg onClick={handleOpen} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 text-white hover:scale-105 active:scale-95 duration-200 ease cursor-pointer h-full pt-4 ml-4 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <p className='text-3xl pl-5 text-white font-bold pt-4'>Musicify</p>
                    <Sidebar isOpen={isOpen} handleOpen={handleOpen} setIsOpen={setIsOpen} />
                </div>

                <div className="flex flex-col absolute top-1/2 h-fit w-screen items-center justify-center">
                    <h2 className='  animate-pulse text-center font-bold text-white text-5xl'>Music wherever you go.</h2>
                    <Link href="/search">
                    <button className='bg-white w-fit font-medium p-3 text-normal rounded-md shadow-md mx-auto mt-5 text-center hover:bg-gray-200 hover:duration-200 active:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-300 active:text-white ease hover:scale-105 active:scale-95'>Explore Songs</button>
                    </Link>
                </div>
            </div>
        </>

    )
}

export default Hero