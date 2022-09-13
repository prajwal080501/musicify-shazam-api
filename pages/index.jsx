import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from "axios"

import Hero from '../components/Hero/Hero'
import { useEffect, useState } from 'react'
import SongContainer from '../components/Songcontainer/SongContainer'
export default function Home({ isOpen, setIsOpen, handleOpen }) {
  const [songs, setSongs] = useState([]);


  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
    params: {key: '484129036', locale: 'en-US'},
    headers: {
      'X-RapidAPI-Key': process.env.RapidAPIKey,
      'X-RapidAPI-Host': process.env.RapidAPIHost,
    }
  };


  async function getSongs() {
    axios.request(options).then(function (response) {
      setSongs(response.data.tracks)
      console.log(songs)
    }).catch(function (error) {
      console.error(error);
    });
  }

  useEffect(() => {
    getSongs()
    console.log(songs)
  }, [])

  return (
    <div className='h-full w-screen bg-white'>
      <Hero isOpen={isOpen} handleOpen={handleOpen} setIsOpen={setIsOpen} />
      <SongContainer songs={songs} />
    </div>
  )
}
