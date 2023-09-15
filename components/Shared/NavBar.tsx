"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {FcMenu} from "react-icons/fc"
import {GrClose} from "react-icons/gr"

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="md:hidden flex items-center justify-evenly">
      <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10 drop-shadow">
        <div className="justify-evenly px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-[14px] md:block">
              {/* LOGO */}
              <Link href="/">
                <Image
                  src="/Logo.svg"
                  alt="My Logo"
                  className=" h-14 w-14 cursor-pointer opacity-100 hover:opacity-75"
                  width={60}
                  height={60}
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <GrClose className="text-3xl text-black"/>
                  ) : (
                    <FcMenu className="text-3xl text-black"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-3 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex font-semibold ">
                <li className="pb-6 text-lg text-neutral-900 py-2 md:px-2 text-center border-b-2 md:border-b-0  hover:bg-indigo-700  border-indigo-700  md:hover:text-indigo-500 md:hover:bg-transparent">
                  <Link href="/About" onClick={() => setNavbar(!navbar)}>
                    About Me
                  </Link>
                </li>
                <li className="pb-6 text-lg text-neutral-900 py-2 px-2 text-center  border-b-2 md:border-b-0  hover:bg-indigo-600  border-indigo-700  md:hover:text-indigo-500 md:hover:bg-transparent">
                  <Link href="/Portfolio" onClick={() => setNavbar(!navbar)}>
                    Portfolio
                  </Link>
                </li>
                <li className="pb-6 text-lg text-neutral-900 py-2 px-2 text-center  border-b-2 md:border-b-0  hover:bg-indigo-600  border-indigo-700  md:hover:text-indigo-500 md:hover:bg-transparent">
                  <Link href="/Tools" onClick={() => setNavbar(!navbar)}>
                    Tools
                  </Link>
                </li>
                <li className="pb-6 text-lg text-neutral-900 py-2 px-2 text-center  border-b-2 md:border-b-0  hover:bg-indigo-600  border-indigo-700  md:hover:text-indigo-500 md:hover:bg-transparent">
                  <Link href="/Contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
