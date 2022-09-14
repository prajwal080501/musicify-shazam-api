import React from 'react'
import SongCard from '../SongCard/SongCard'

const SongContainer = ({songs}) => {
  return (
    <div className="bg-gray-100 h-[100vh] max-w-[95vw] mx-auto">
      <p className='font-bold text-black text-4xl p-5 mt-3'>Recommended Songs</p>
    <div className="bg-gray-100 rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[95vw] mx-auto">
    {songs.map(song=>(
                <SongCard key={song.title} title={song.title} image={song.images}/>
            ))}
    </div>
    </div>
  )
}

export default SongContainer