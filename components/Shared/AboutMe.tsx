import Image from 'next/image'
import React from 'react'
import { Separator } from '../ui/separator'

const AboutMe = () => {
  return (
    <>
    <div className="hidden md:flex flex justify-center items-center min-h-[800px] bg-neutral-100 border drop-shadow-sm">
    <div className="flex flex-col items-start">
      <div className="ml-20 flex flex-col gap-y-2">
        <h2 className="text-5xl text-indigo-500 font-bold mb-6">Me in a nutshell </h2>
        <p>I'm a Malaysian-based Junior Developer. Since the end 2022, I've discovered </p>
        <p> my love for designing and expanding my skillsets through out. I've been very </p>
        <p>fortunate to have met my mentor, he guided me through out my starting journey</p>
        <p>and thus lead to me falling to fall in love with coding even more. Seeing how</p>
        <p>People design UI's, doing front-end and back-end it just motivates me more</p>
        <p>and I hope that I would be able to design something super cool at some point.</p>
      </div>
      <div className='mt-10 ml-20 flex flex-col gap-y-2'>
        <p>To me its important to get regular screen downtime, so when I'm not busy with </p>
        <p>pixels you'll find me working out, helping my grandparents gardening, going out</p>
        <p> for a walk trying to learn a new recipe to cook or hanging out with my friends </p>
        <p>and family.</p>
      </div>
    </div>
    <Image src="/Profile3.jpg" width={400} height={400} className='rounded-lg ml-20' alt='My photo'/>
  </div>
  <div className="md:hidden flex flex-col min-h-[800px] bg-neutral-100 border drop-shadow-sm p-6">
      <h2 className="text-3xl md:text-5xl text-indigo-500 font-bold mb-6 text-center">Me in a nutshell</h2>
      <Image src="/Profile3.jpg" width={300} height={300} className='mx-auto rounded-lg mb-6' alt='My photo'/>
      <div className="flex flex-col gap-4 text-lg">
        <p>
          I'm a Malaysian-based Junior Developer. Since the end of 2022, I've discovered my love for designing and expanding my skillsets.
        </p>
        <p>
          I've been fortunate to have met my mentor, who guided me throughout my journey, leading to my passion for coding.
        </p>
        <p>
          Seeing how people design UIs and work on front-end and back-end development motivates me to learn more and design something amazing.
        </p>
      </div>
      <div className="mt-6 flex flex-col gap-4 text-lg">
        <p>
          To me, it's important to have regular screen downtime. When I'm not busy with pixels, you'll find me working out,
          helping my grandparents with gardening, trying out new recipes, or spending time with friends and family.
        </p>
      </div>
    </div>
  </>
  )
}

export default AboutMe