import React from 'react'
import './Projects.css'
import image from '../assets/image3.jpg'

const Projects = () => {
  return (
    <div className="Container"><h1>MY ACHEIVEMENTS</h1>
    <div className="imag">
       <div className="io"> <img src={image}></img></div>
        <p>
         WE attended a paper presentatiomn
        </p>
    </div>
    
    </div>
    
    
  )
}

export default Projects;