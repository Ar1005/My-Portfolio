import About from '@/components/Shared/About'
import AboutMe from '@/components/Shared/AboutMe'
import Footer from '@/components/Shared/Footer'
import FunFacts from '@/components/Shared/FunFacts'
import NavBar from '@/components/Shared/NavBar'
import Topbar from '@/components/Shared/Topbar'
import React from 'react'

const page = () => {
  return (
    <main className="bg-neutral-100 min-h-screen w-full">
      <NavBar />
      <div>
        <About/>
        <FunFacts />
        <AboutMe />
      </div>
      <Footer />
    </main>
  )
}

export default page