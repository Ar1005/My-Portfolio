"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { HiMenu, HiMenuAlt2 } from "react-icons/hi";

const Topbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [mobileMenuIcon, setMobileMenuIcon] = useState(<HiMenu className="w-8 h-8"/>);

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    setMobileMenuIcon(
      showMobileMenu ? (
        <HiMenu className="w-8 h-8 transition duration-400" />
      ) : (
        <HiMenuAlt2 className="w-8 h-8 transition duration-400" />
      )
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showMobileMenu &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showMobileMenu]);

  const scroll = `fixed z-10 w-full py-[14px] flex items-center justify-around transition-transform duration-1000 ${
    scrolled
      ? "bg-white drop-shadow transform translate-y-0 transition duration-400"
      : "bg-white drop-shadow transform -translate-y-0 transition duration-400"
  }`;

  const backdrop = `fixed inset-0 z-10 bg-white ${
    showMobileMenu ? "opacity-75" : "opacity-0 pointer-events-none"
  } transition-opacity duration-300`;

  const mobileLinks = [
    { path: "/About", text: "About Me" },
    { path: "/Portfolio", text: "Portfolio" },
    { path: "/Tools", text: "Tools" },
    { path: "/Contact", text: "Contact" },
  ];

  return (
    <div className={scroll}>
      <Link href="/">
        <Image
          src="/Logo.svg"
          alt="My Logo"
          className=" h-14 w-14 cursor-pointer opacity-100 hover:opacity-75"
          width={60}
          height={60}
        />
      </Link>
      <div className="text-neutral-900 text-lg font-semibold hover:font-blue-600 gap-4 flex hidden md:flex">
        <Link
          href="/About"
          className="text-neutral-900 text-lg font-semibold hover:text-indigo-500 gap-4 flex transition "
        >
          About Me
        </Link>
        <Link
          href="/Portfolio"
          className="text-neutral-900 text-lg font-semibold hover:text-indigo-500 gap-4 flex transition "
        >
          Portfolio
        </Link>
        <Link
          href="/Tools"
          className="text-neutral-900 text-lg font-semibold hover:text-indigo-500 gap-4 flex transition "
        >
          Tools
        </Link>
        <Link href="/Contact">
          <span className="rounded-full border text-neutral-900 font-semibold text-lg border-indigo-500 py-2 px-4 hover:bg-indigo-500 hover:text-neutral-100">
            Contact
          </span>
        </Link>
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-neutral-900 text-lg focus:outline-none"
        >
          {mobileMenuIcon}
        </button>
      </div>
      <div
        className={`md:hidden text-neutral-900 text-lg font-semibold gap-4 flex flex-col ${
          showMobileMenu ? "block" : "hidden"
        }`}
        ref={mobileMenuRef}
      >
        {mobileLinks.map((link, index) => (
          <a
            href={link.path}
            key={index}
            className="hover:text-indigo-500 transition"
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Topbar;
