import About from '@/components/Shared/About'
import AboutMe from '@/components/Shared/AboutMe'
import Footer from '@/components/Shared/Footer'
import FunFacts from '@/components/Shared/FunFacts'
import Header from '@/components/Shared/Header'
import NavBar from '@/components/Shared/NavBar'
import React from 'react'

const page = () => {
  return (
    <main className="bg-neutral-100 min-h-screen w-full">
      <Header />
      <NavBar />
      <div>
        <About/>
        <FunFacts />
        <AboutMe />
        <Footer />
      </div>
    </main>
  )
}

export default page