import React from 'react'
import Nav from '../Nave/Nave.jsx'
import Hero  from './Hero.jsx'
import Tdest from './Topdestination.jsx'
import Whywe from './why.jsx'
import Packege from './Packege.jsx'
import Footer from '../footer/Footer.jsx'
import TopActivity from './TopActivity.jsx'
import TopHotels from './TopHotels.jsx'
import Vehicle from './Vehicle.jsx'

function Home() {
  return (
    <div>
        <Nav></Nav>
        <Hero></Hero>
        <Tdest></Tdest>
        <Whywe></Whywe>
        <Packege></Packege>
        <TopActivity></TopActivity>
        <TopHotels></TopHotels>
        <Vehicle></Vehicle>
        <Footer></Footer>
      
    </div>

  )
}

export default Home
