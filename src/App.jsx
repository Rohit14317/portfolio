import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './About';
import Projects from './Projects';
import Contacts from './components/Contacts';
import Favorites from './components/Favorites';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Contacts' element={<Contacts/>}/>
        <Route path='/Favorites' element={<Favorites/>}/>
      </Routes>
    </Router>
  )
}

export default App
