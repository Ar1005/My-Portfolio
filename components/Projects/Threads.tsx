import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Github, ExternalLink } from "lucide-react";

const Threads = () => {
  return (
    <>
    <div className="hidden md:flex bg-white py-4 px-4 flex flex-col rounded-lg drop-shadow-md items-center mt-10">
      <Image src="/Threads-app.png" alt="Threads" width={400} height={1000} className="rounded-lg mb-4"/>
      <div className="text-neutral-800 flex items-center flex-col ml-6">
        <h2 className="font-bold">Threads</h2>
        <div className="flex flex-col items-center">
          <span>
          "Threads" is a website that helps people connect over things they like. You can join or make
          </span>
          <span>
          groups about your interests. You can talk, share pictures, videos, and ideas, and meet others 
          </span>
          <span>
          who also like what you do.
          </span>
          <span> who share your passions.</span>
          <div className="flex mt-8 gap-x-6">
            <div className="bg-white p-4 rounded-lg drop-shadow-lg font-bold">React</div>
            <div className="bg-white p-4 rounded-lg drop-shadow-lg font-bold">
              Next JS
            </div>
            <div className="bg-white p-4 rounded-lg drop-shadow-lg font-bold">
              Type Script
            </div>
            <div className="bg-white p-4 rounded-lg drop-shadow-lg font-bold">
              tailwindcss
            </div>
          </div>
          <div className="mt-4 flex gap-x-4 ">
            <Link
              className="flex items-center hover:text-indigo-500 transition-full duration-800"
              href="https://github.com/Ar1005/threads-app-armando"
            >
              <span className="mr-2">Code</span>
              <Github />
            </Link>
            <Link
              className="flex items-center hover:text-indigo-500 transition-full duration-800"
              href="https://threads-app-armando-pjkl.vercel.app/"
            >
              <span className="mr-2">Live Demo</span>
              <ExternalLink />
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="md:hidden bg-white py-4 px-4 flex flex-col rounded-lg drop-shadow-md items-center mt-6 md:mt-10">
      <Image src="/Threads-app.png" alt="Threads" width={300} height={500} className="rounded-lg mb-4"/>
      <div className="text-neutral-800 flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-2">
          Threads
        </h2>
        <p className="text-sm md:text-base text-center mb-4">
          "Threads" is a website that helps people connect over things they like. You can join or make groups about your interests. You can talk, share pictures, videos, and ideas, and meet others who share your passions.
        </p>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-2">
          <div className="bg-white p-2 md:p-4 rounded-lg drop-shadow-lg font-bold text-sm md:text-base">
            React
          </div>
          <div className="bg-white p-2 md:p-4 rounded-lg drop-shadow-lg font-bold text-sm md:text-base">
            Next JS
          </div>
          <div className="bg-white p-2 md:p-4 rounded-lg drop-shadow-lg font-bold text-sm md:text-base">
            Type Script
          </div>
          <div className="bg-white p-2 md:p-4 rounded-lg drop-shadow-lg font-bold text-sm md:text-base">
            tailwindcss
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 md:gap-4 text-sm md:text-base">
          <Link
            className="flex items-center hover:text-indigo-500 transition-full duration-800"
            href="https://github.com/Ar1005/threads-app-armando"
          >
            <Github className="w-4 h-4 mr-2" />
            <span>Code</span>
          </Link>
          <Link
            className="flex items-center hover:text-indigo-500 transition-full duration-800"
            href="https://threads-app-armando-pjkl.vercel.app/"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            <span>Live Demo</span>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Threads;
