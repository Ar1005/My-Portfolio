import Contact from '@/components/Shared/Contact'
import Footer from '@/components/Shared/Footer'
import Header from '@/components/Shared/Header'
import Mailto from '@/components/Shared/Mailto'
import NavBar from '@/components/Shared/NavBar'
import React from 'react'

const page = () => {
  return (
    <main className="bg-neutral-100 min-h- w-full">
      <Header />
      <NavBar />
      <div>
        <Contact />
        <Mailto />
        <Footer />
      </div>
    </main>
  )
}

export default page