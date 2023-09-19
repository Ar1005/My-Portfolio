import React from "react";
import Link from "next/link";
import Techstack from "./TechStack";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Content = () => {
  return (
    <>
      {/*this is a the desktop view*/}
      <div className="flex flex-col min-h-screen items-center justify-center hidden md:flex">
        <div className=" flex justify-center items-center my-auto ">
          <div className="flex flex-col items-center">
            <div className="flex flex-col mx-auto gap-x-40 items-center">
              <div className="avatar">
                <div className="w-[400px] mb-10 rounded-full">
                  <img src="/Profile.jpg" />
                </div>
              </div>
              <div className=" md:ml-10  items-center flex flex-col text-[44px] font-bold text-neutral-900">
                <h2>
                  HELLO, MY NAME IS{" "}
                  <span className="text-indigo-500">ARMAND!</span>
                  <span className="waving-hand"> 👋</span>
                </h2>
                <div className="text-xl flex flex-col items-center sm:text-center">
                  <p className="font-normal flex items-center">
                    <ChevronLeft />I am a passionate Junior Front-End Developer
                    <ChevronRight />
                  </p>
                </div>
                <div className="flex items-center mt-6 gap-x-4">
                  <Link href="https://www.linkedin.com/in/armand-abdullah-370891215/">
                    <AiFillLinkedin className="cursor-pointer opacity-75 hover:opacity-100" />
                  </Link>
                  <Link href="https://github.com/Ar1005">
                    <AiFillGithub className="cursor-pointer opacity-75 hover:opacity-100" />
                  </Link>
                </div>
              </div>
            </div>
            <Techstack />
          </div>
        </div>
        {/*this is the footer*/}
        <div className="justify-self-end w-full flex">
          <div className="hidden md:flex w-full h-20 bg-[#2d2e32] flex items-center justify-center justify-self-end gap-40">
            <span className="font-normal text-neutral-100">
              COPYRIGHT © ARMAND
            </span>
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/in/armand-abdullah-370891215/">
                <AiFillLinkedin className="h-8 w-8  drop-shadow-lg text-white cursor-pointer opacity-75 hover:opacity-100" />
              </Link>
              <Link href="https://github.com/Ar1005">
                <AiFillGithub className="h-8 w-8  drop-shadow-lg text-white cursor-pointer opacity-75 hover:opacity-100" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*this is a the mobile view*/}
      <div className="md:hidden flex my-auto justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <div className="avatar">
                <div className="w-[400px] mt-24 mb-10 rounded-full">
                  <img src="/Profile.jpg" />
                </div>
              </div>
              <div className="text-center items-center text-xl md:text-[44px] font-bold text-neutral-900">
                <h2>
                  HELLO, MY NAME IS{" "}
                  <span className="text-indigo-500">ARMAND!</span>
                  <span className="waving-hand"> 👋</span>
                </h2>
                <div className="mt-4">
                  <p className="font-normal">
                    I am a passionate Junior Front-End Developer.
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-6">
                <Link href="https://www.linkedin.com/in/armand-abdullah-370891215/">
                  <AiFillLinkedin className="cursor-pointer opacity-75 hover:opacity-100 text-5xl md:text-xl" />
                </Link>
                <Link href="https://github.com/Ar1005">
                  <AiFillGithub className="cursor-pointer opacity-75 hover:opacity-100 text-5xl md:text-xl ml-4" />
                </Link>
              </div>
            </div>
            <Techstack />
          </div>
        
          </div>

    </>
  );
};

export default Content;
