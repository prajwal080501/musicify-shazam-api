import { useState } from 'react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false)
  function handleOpen(){
    setIsOpen(!isOpen);
  }
  return <Component {...pageProps} handleOpen={handleOpen} isOpen={isOpen} setIsOpen={setIsOpen} />
}

export default MyApp
