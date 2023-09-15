"use client";

import Image from "next/image";
import React from "react";

const Mailto = () => {
  const handleEmailButtonClick = () => {
    window.location.href = "mailto:armandazmin@gmail.com";
  };

  return (
    <>
    <div className="hidden md:flex flex items-center justify-center min-h-[800px] bg-white">
      <div className="flex items-start flex-col">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-indigo-500">Send me an email</h1>
          <p>Press the button below to send me an email</p>
          <p>I'll get back to you as soon as I can</p>
        </div>
        <button
          onClick={handleEmailButtonClick}
          className="px-6 py-3 mt-10 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Send Email
        </button>
      </div>
      <Image src="/star.png" alt="hehe" width={400} height={400} className="ml-24"/>
    </div>
    <div className="md:hidden flex flex-col items-center justify-center min-h-[540px] bg-white">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-2 text-indigo-500">
          Send me an email
        </h1>
        <p className="text-sm md:text-base">
          Press the button below to send me an email.
          I'll get back to you as soon as I can.
        </p>
      </div>
      <button
        onClick={handleEmailButtonClick}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Send Email
      </button>
      <div className="mt-8">
        <Image
          src="/star.png"
          alt="hehe"
          width={200}
          height={200}
          className="rounded-lg"
        />
      </div>
    </div>
    </>
  );
};

export default Mailto;
