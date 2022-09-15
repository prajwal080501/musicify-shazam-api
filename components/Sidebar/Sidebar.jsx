import React from 'react'
import Link from 'next/link'

const Sidebar = ({ isOpen, setIsOpen, handleOpen }) => {
    return (
        <div className={isOpen ? 'bg-white w-[40vh] h-full fixed top-0 left-0 z-10' : 'hidden'}>
            <div className="flex jus items-center">
                <svg onClick={handleOpen} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-red-400  mt-4 ml-3 cursor-pointer active:scale-95  ease active:text-black duration-200">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className='mt-4 text-center mx-auto w-full font-bold text-3xl j'>Musicify</p>

            </div>
            <div className='border-t-2 w-1/2 mx-auto border-gray-100 mt-5' ></div>
            <div className='w-[100%] flex flex-col space-y-4  '>
                
                <Link href="/">
                    <a href="" className="bg-gray-100 text-black font-medium hover:bg-blue-400 shadow-sm hover:text-white duration-300 text-center w-[100%] p-2">Home</a>
                </Link>
                <Link href="/search">
                    <a href="" className="bg-gray-100 text-black font-medium hover:bg-blue-400 shadow-sm hover:text-white duration-300 text-center w-[100%] p-2">Search</a>
                </Link>
                <Link href="/">
                    <a href="" className="bg-gray-100 text-black font-medium hover:bg-blue-400 shadow-sm hover:text-white duration-300 text-center w-[100%] p-2">Favurites</a>
                </Link>
                <Link href="/">
                    <a href="" className="bg-gray-100 text-black font-medium hover:bg-blue-400 shadow-sm hover:text-white duration-300 text-center w-[100%] p-2">Playlists</a>
                </Link>
                
            </div>

            <div className='absolute bottom-0 text-center w-full font-bold text-sm'>
                <p>Musicify 2022 Ⓒ </p>
            </div>
        </div>
    )
}

export default Sidebar