import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Video from './components/Video/Video'
import Icons from './components/Icons/icons'
import OurOffers from './components/OurOffers/OurOffers'
import Comment from './components/Comment/Comment'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


import Aos from "aos";
import { useEffect } from 'react'

function App() {

  useEffect(()=>{
    Aos.init();
  }, [])

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Video/>
      <Icons/>
      <OurOffers/>
      <Comment/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
