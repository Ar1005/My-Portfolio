import Contact from '@/components/Shared/Contact'
import Footer from '@/components/Shared/Footer'
import Mailto from '@/components/Shared/Mailto'
import NavBar from '@/components/Shared/NavBar'
import Topbar from '@/components/Shared/Topbar'
import React from 'react'

const page = () => {
  return (
    <main className="bg-neutral-100 min-h- w-full">
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