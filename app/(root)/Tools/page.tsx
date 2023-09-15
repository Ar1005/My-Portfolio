import Footer from '@/components/Shared/Footer'
import Header from '@/components/Shared/Header'
import NavBar from '@/components/Shared/NavBar'
import Tools from '@/components/Shared/Tools'
import React from 'react'

const page = () => {
  return (
    <main className="bg-neutral-100 min-h-screen w-full">
      <Header />
      <NavBar />
      <div>
        <Tools />
        <Footer />
      </div>
    </main>
  )
}

export default page