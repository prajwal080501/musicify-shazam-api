import axios from 'axios';
import React, { useState } from 'react'
import SearchContainer from '../components/Searchcontainer/SearchContainer';
import Sidebar from '../components/Sidebar/Sidebar'
import SongContainer from '../components/Songcontainer/SongContainer';
import Link from 'next/link';
const Search = ({ isOpen, setIsOpen, handleOpen }) => {
const [songList, setSongList] = useState([]);
const [query, setQuery] = useState("");
  function onSubmit(e) {
    e.preventDefault();
  }

  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/search',
    params: {term: query, locale: 'en-US', offset: '0', limit: '5'},
    headers: {
      'X-RapidAPI-Key':'b4c218f272msh21bfa859ca66f2fp14a119jsn868c6b2145de',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
    }
  };

  async function searchSong(){
    axios.request(options).then(function (response) {
      setSongList(response.data.tracks["hits"]);
      console.log(songList);
    }).catch(function (error) {
      console.error(error);
    });
  }
  return (
    <div className='w-screen h-screen bg-gray-100 '>
      <div className='w-screen bg-red-400 h-[50vh] top-1/2 flex flex-col justify-items-center'>
        <div className="flex items-center justify-items-center">

          <svg onClick={handleOpen} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 text-white hover:scale-105 active:scale-95 duration-200 ease cursor-pointer h-full pt-4 ml-4 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <Link href="/">
          <p className='text-3xl cursor-pointer pl-5 text-white font-bold pt-4'>Musicify</p>
          </Link>
          
          <Sidebar isOpen={isOpen} handleOpen={handleOpen} setIsOpen={setIsOpen} />
        </div>
        <form onSubmit={onSubmit} className="w-screen h-full flex items-center justify-center">
          <input value={query} onChange={(e)=> setQuery(e.target.value)} type="text" placeholder='Search' className='p-3 rounded-l-md  shadow-lg outline-none w-[50vw]' />
          <input type="submit" onClick={searchSong} className="bg-gray-100 duration-300 ease rounded-r-md hover:bg-gray-700 hover:text-white text-black font-medium p-3 shadow-lg"/>
        </form>
      </div>
      <SearchContainer query={query} songs={songList}/>
    </div>
  )
}

export default Search