import About from '@/components/Shared/About'
import AboutMe from '@/components/Shared/AboutMe'
import Footer from '@/components/Shared/Footer'
import FunFacts from '@/components/Shared/FunFacts'
import Header from '@/components/Shared/Header'
import NavBar from '@/components/Shared/NavBar'
import React from 'react'

const page = () => {
  return (
      <div>
        <About/>
        <FunFacts />
        <AboutMe />
      </div>
  )
}

export default page