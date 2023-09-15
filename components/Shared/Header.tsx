"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { HiMenu, HiMenuAlt2 } from "react-icons/hi";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scroll = `md:flex hidden fixed z-10 w-full py-[14px] flex items-center justify-around transition-transform duration-1000 ${
    navbar
      ? "bg-white drop-shadow transform translate-y-0 transition duration-400"
      : "bg-neutral-100 transform -translate-y-0 transition duration-400"
  }`;

  return (
    <div className={scroll}>

      <Link href="/">
        <Image
          src="/Logo.svg"
          alt="My Logo"
          className="h-14 w-14 cursor-pointer opacity-100 hover:opacity-75"
          width={60}
          height={60}
        />
      </Link>
      <div className="text-neutral-900 text-lg font-semibold hover:font-blue-600 gap-4 flex hidden md:flex">
        <Link
          href="/About"
          className="text-neutral-900 text-lg font-semibold hover:text-indigo-500 gap-4 flex transition"
        >
          About Me
        </Link>
        <Link
          href="/Portfolio"
          className="text-neutral-900 text-lg font-semibold hover:text-indigo-500 gap-4 flex transition"
        >
          Portfolio
        </Link>
        <Link
          href="/Tools"
          className="text-neutral-900 text-lg font-semibold hover:text-indigo-500 gap-4 flex transition"
        >
          Tools
        </Link>
        <Link href="/Contact">
          <span className="rounded-full border text-neutral-900 font-semibold text-lg border-indigo-500 py-2 px-4 hover:bg-indigo-500 hover:text-neutral-100">
            Contact
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
