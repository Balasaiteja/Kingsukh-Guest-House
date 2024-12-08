import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Rooms from './components/Rooms'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Map from './components/Map'
import Footer from './components/Footer'
const App = () => {
  return (
  <>
    
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Services></Services>
    <Rooms></Rooms>
    <Gallery></Gallery>
    <Contact></Contact>
    <Map></Map>
    <Footer></Footer>
    
  </>
    
    
  )
}

export default App
