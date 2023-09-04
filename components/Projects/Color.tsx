import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Color = () => {
  return (
    <>
    <div className="hidden md:flex bg-white py-4 px-4 flex flex-col rounded-lg drop-shadow-md items-center mt-10">
      <Image src="/ThreadsCraft.png" alt="Thread Craft" width={400} height={1000} className="rounded-lg"/>
      <div className="text-neutral-800 flex items-center flex-col mr-6">
        <h2 className="font-bold">Thread Craft</h2>
        <div className="flex flex-col items-center">
          <span>
            ThreadCraft is not just an app; it's a gateway to self-expression.
            With ThreadCraft, 
          </span>
          <span>
          you're not limited to store-bought designs. You're the designer, and your shirt is your canvas.
          </span>
          <span>
          Embrace the joy of wearing something that's uniquely yours or surprise your 
          </span>
          <span>loved ones with personalized gifts that resonate with their style.</span>
          <div className="flex mt-8 gap-x-6">
            <div className="bg-white p-4 rounded-lg drop-shadow-lg font-bold">
              Vite
            </div>
            <div className="bg-white p-4 rounded-lg drop-shadow-lg font-bold">
              Three JS
            </div>
            <div className="bg-white p-4 rounded-lg drop-shadow-lg font-bold">
              Java Script
            </div>
            <div className="bg-white p-4 rounded-lg drop-shadow-lg font-bold">
              tailwindcss
            </div>
          </div>
          <div className="mt-4 flex gap-x-4 ">
            <Link
              className="flex items-center hover:text-indigo-500 transition-full duration-800"
              href="https://github.com/Ar1005/alpha_color_openai"
            >
              <span className="mr-2">Code</span>
              <Github />
            </Link>
            <Link
              className="flex items-center hover:text-indigo-500 transition-full duration-800"
              href="https://alpha-color-openai-ngdg.vercel.app/"
            >
              <span className="mr-2">Live Demo</span>
              <ExternalLink />
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="md:hidden bg-white py-4 px-4 flex flex-col rounded-lg drop-shadow-md items-center mt-6 md:mt-10">
      <Image src="/ThreadsCraft.png" alt="Thread Craft" width={300} height={500} className="rounded-lg mb-4"/>
      <div className="text-neutral-800 flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-2">
          Thread Craft
        </h2>
        <p className="text-sm md:text-base text-center mb-4">
          ThreadCraft is not just an app; it's a gateway to self-expression. With ThreadCraft,
          you're not limited to store-bought designs. You're the designer, and your shirt is your canvas.
          Embrace the joy of wearing something that's uniquely yours or surprise your loved ones with personalized gifts that resonate with their style.
        </p>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-2">
          <div className="bg-white p-2 md:p-4 rounded-lg drop-shadow-lg font-bold text-sm md:text-base">
            Vite
          </div>
          <div className="bg-white p-2 md:p-4 rounded-lg drop-shadow-lg font-bold text-sm md:text-base">
            Three JS
          </div>
          <div className="bg-white p-2 md:p-4 rounded-lg drop-shadow-lg font-bold text-sm md:text-base">
            Java Script
          </div>
          <div className="bg-white p-2 md:p-4 rounded-lg drop-shadow-lg font-bold text-sm md:text-base">
            tailwindcss
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 md:gap-4 text-sm md:text-base">
          <Link
            className="flex items-center hover:text-indigo-500 transition-full duration-800"
            href="https://github.com/Ar1005/alpha_color_openai"
          >
            <Github className="w-4 h-4 mr-2" />
            <span>Code</span>
          </Link>
          <Link
            className="flex items-center hover:text-indigo-500 transition-full duration-800"
            href="https://alpha-color-openai-ngdg.vercel.app/"
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

export default Color;
