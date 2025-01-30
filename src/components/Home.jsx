import { useState } from 'react'
import '../App.css'
import image from '../assets/image.png'
import About from './about'
import Projects from './projects'
import Contacts from './Contacts'
import Favorites from './Favorites'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <>
    {/* <About/> */}
    <div className="con">
      <div className="new">
      <Link to="/About">About</Link>
      <Link to="/Projects">Projects</Link>
      <Link to="/Contacts">Contacts</Link>
      <Link to="/Favorites">Favorites</Link>
      </div>
        <hr></hr>
      <div className="he">
        <img src={image}></img>
      </div>

      
    </div>

    </>
  )
}

export default Home
