import React from 'react'
import Image from 'next/image'
const SongCard = ({ title, image }) => {
    return (
        <div className="w-fit h-fit hover:opacity-70 pb-3 ml-6 mb-8 shadow-md rounded-md hover:scale-105 ease duration-150 cursor-pointer bg-white">
            <img src={`${image["coverart"]}`} className="rounded-md mx-auto" objectFit='contain' />
            <div className=" pl-2 pt-3 flex justify-between items-center">
                <p className='font-bold text-base'>{title}</p>
                <button className="bg-green-500 p-3 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>

                </button>
            </div>
        </div>
    )
}

export default SongCard