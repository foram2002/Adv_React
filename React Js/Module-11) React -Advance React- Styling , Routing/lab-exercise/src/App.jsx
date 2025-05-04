import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './lab-exercise/Navbar'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from './lab-exercise/Home'
import About from './lab-exercise/About'
import Cards from './lab-exercise/Cards'
import Contact from './lab-exercise/Contact'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/home' element={<Cards/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
