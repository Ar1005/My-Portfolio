import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="hidden md:flex w-full h-20 bg-[#2d2e32] flex items-center justify-center justify-self-end gap-40">
        <span className="font-normal text-neutral-100">COPYRIGHT © ARMAND</span>
        <div className="flex gap-4">
          <Link href="https://www.linkedin.com/in/armand-abdullah-370891215/">
            <AiFillLinkedin className="h-8 w-8  drop-shadow-lg text-white cursor-pointer opacity-75 hover:opacity-100" />
          </Link>
          <Link href="https://github.com/Ar1005">
            <AiFillGithub className="h-8 w-8  drop-shadow-lg text-white cursor-pointer opacity-75 hover:opacity-100" />
          </Link>
        </div>
      </div>
      <div className="md:hidden w-full h-20 bg-[#2d2e32] flex items-center justify-self-end justify-center gap-4 p-2">
        <span className="font-normal text-neutral-100 text-center">
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
    </>
  );
};

export default Footer;
