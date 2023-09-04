import Footer from '@/components/Shared/Footer'
import NavBar from '@/components/Shared/NavBar'
import Tools from '@/components/Shared/Tools'
import Topbar from '@/components/Shared/Topbar'
import { Separator } from '@/components/ui/separator'
import React from 'react'

const page = () => {
  return (
    <main className="bg-neutral-100 min-h-screen w-full">
      <NavBar />
      <div>
        <Tools />
        <Footer />
      </div>
    </main>
  )
}

export default page