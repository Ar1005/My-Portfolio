import About from '@/components/Shared/About'
import AboutMe from '@/components/Shared/AboutMe'
import FunFacts from '@/components/Shared/FunFacts'
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