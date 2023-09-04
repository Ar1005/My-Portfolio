import Image from "next/image";
import React from "react";
import Link from "next/link";
import Techstack from "./TechStack";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Content = () => {
  return (
    <>
      <div className="hidden md:flex flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center">
          <div className="flex flex-col mx-auto gap-x-40 items-center">
            <div className="avatar">
              <div className="w-[400px] mt-24 mb-10 rounded-full">
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
      <div className="md:hidden flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center mt-28">
          <div className="flex flex-col items-center">
            <div className="avatar">
              <div className="w-[400px] mb-10 rounded-full">
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
