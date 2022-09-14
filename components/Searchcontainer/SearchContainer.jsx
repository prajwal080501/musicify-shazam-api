import React from 'react'
import Searchcard from '../Searchcard/Searchcard'
import SongCard from '../SongCard/SongCard'

const SearchContainer = ({songs, query}) => {
  return (
    <div className={songs.length>0 ? "bg-gray-100 h-[100vh] max-w-[95vw] mx-auto" : "hidden"}>
      <p className=' text-black text-4xl p-5 mt-3'>Search results <span className='font-bold'>{query}</span></p>
    <div className="bg-gray-100 rounded-lg p-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[95vw] mx-auto">
    {songs.map(song=>(
                <Searchcard key={song["track"].title} title={song["track"].title} image={song["track"]["images"]}/>
            ))}
    </div>
    </div>
  )
}

export default SearchContainer