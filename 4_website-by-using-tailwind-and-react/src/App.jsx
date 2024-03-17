import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Analetics from './components/Analetics'
import NewsLetter from './components/NewsLetter'
import Subscription from './components/Subscription'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Nav/>
    <Hero/>
    <Analetics img={'https://img.freepik.com/free-vector/web-design-content-creating-landing-page-website-homepage-creating-design-element-female-graphics-designer-developer-flat-character_335657-2617.jpg?t=st=1709985412~exp=1709989012~hmac=2b05c6511ece08ab64e5d5a7b29b927f0c75e5302b25f98ef988e9639e819497&w=740'}heading={'data analytics dashboard'} mainHeading={'Manager Data Analytics Centrally'}/>
    <NewsLetter/>
    <Subscription/>
    <Footer/>
    </>
  )
}

export default App