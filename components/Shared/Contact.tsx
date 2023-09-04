"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillLinkedin, AiFillMail, AiOutlineInstagram } from "react-icons/ai";

const Contact = () => {

  return (
    <>
      <div className="hidden md:flex flex justify-center items-center min-h-[800px] bg-white drop-shadow">
        <div className="flex flex-col items-start">
          <h2 className="text-7xl text-indigo-500 font-bold">Contact.</h2>
          <div>Get in touch with me via social media or email.</div>
          <div className="mt-20">
            <div className="flex gap-10">
              <Link
                href="https://www.instagram.com/ar.2.1/"
                className="flex items-center text-pink-500 opacity-75 hover:opacity-100 transition duration-200"
              >
                <AiOutlineInstagram className="h-20 w-20 rounded-full text-pink-500 opacity-75 hover:opacity-100" />
                <span className="text-pink-500 ">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/armand-abdullah-370891215/"
                className="flex items-center text-blue-500 opacity-75 hover:opacity-100 transition duration-200"
              >
                <AiFillLinkedin className="h-20 w-20 text-blue-500 opacity-75 hover:opacity-100" />
                <span className="text-blue-500">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
        <Image
          src="/my photo.jpg"
          alt="My Photo"
          width={400}
          height={400}
          className="rounded-lg ml-20"
        />
      </div>
      <div className="md:hidden flex flex-col justify-center items-center min-h-[760px] bg-white">
        <h2 className="text-4xl md:text-7xl text-indigo-500 font-bold mt-10 md:mt-20">
          Contact.
        </h2>
        <div className="text-center mt-4 md:mt-8">
          Get in touch with me via social media or email.
        </div>
        <div className="flex items-center mt-8 md:mt-20 gap-x-4">
          <Link
            href="https://www.instagram.com/ar.2.1/"
            className="flex items-center text-pink-500 opacity-75 hover:opacity-100 transition duration-200"
          >
            <AiOutlineInstagram className="h-12 w-12 md:h-20 md:w-20 rounded-full text-pink-500 opacity-75 hover:opacity-100" />
            <span className="text-pink-500 text-sm md:text-base">
              Instagram
            </span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/armand-abdullah-370891215/"
            className="flex items-center text-blue-500 opacity-75 hover:opacity-100 transition duration-200"
          >
            <AiFillLinkedin className="h-12 w-12 md:h-20 md:w-20 text-blue-500 opacity-75 hover:opacity-100" />
            <span className="text-blue-500 text-sm md:text-base">LinkedIn</span>
          </Link>
        </div>
        <div className="mt-10 md:hidden">
          <Image
            src="/my photo.jpg"
            alt="My Photo"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
