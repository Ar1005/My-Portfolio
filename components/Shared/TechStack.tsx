import Image from "next/image";
import Link from "next/link";
import React from "react";

const Techstack = () => {
  return (
    <>
    <div className="hidden md:flex flex mt-20 gap-14 items-center mb-20">
      <h2 className="text-black text-2xl font-semibold mr-14">
        Tech Stack<span className="font-normal"> |</span>
      </h2>
      <Link href="https://react.dev/">
        <Image
          src="/React.png"
          alt="React Logo"
          height={20}
          width={40}
          className="cursor-pointer opacity-75 hover:opacity-100"
        />
      </Link>
      <Link href="https://tailwindcss.com/">
        <Image
          src="/Tailwind.png"
          alt="Tailwind Logo"
          height={20}
          width={40}
          className="cursor-pointer opacity-50 hover:opacity-100"
        />
      </Link>
      <Link href="https://vercel.com/">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          height={100}
          width={160}
          className="cursor-pointer opacity-75 hover:opacity-100"
        />
      </Link>
      <Link href="https://nextjs.org/">
        <Image
          src="/nextjs.svg"
          alt="Next Js Logo"
          height={100}
          width={40}
          className="cursor-pointer opacity-75 hover:opacity-100"
        />
      </Link>
      <Link href="https://create.t3.gg/">
        <Image
          src="/t3-logo.png"
          alt="T3 Logo"
          width={40}
          height={60}
          className="cursor-pointer opacity-75 hover:opacity-100"
        />
      </Link>
      <Link href="https://www.typescriptlang.org/">
        <Image
          src="/typescript.svg"
          alt="Typescript Logo"
          width={40}
          height={60}
          className="cursor-pointer opacity-75 hover:opacity-100"
        />
      </Link>
      <Link href="https://www.squarespace.com/">
        <Image
          src="/SquareSpaceLogo.png"
          alt="SquareSpace Logo"
          width={55}
          height={60}
          className="cursor-pointer opacity-75 hover:opacity-100"
        />
      </Link>
      <Link href="https://wordpress.com/">
        <Image
          src="/WordPressLogo.png"
          alt="WordPress Logo"
          width={55}
          height={60}
          className="cursor-pointer opacity-75 hover:opacity-100"
        />
      </Link>
    </div>
    <div className="md:hidden flex flex-col mt-10 md:hidden gap-4 items-center mb-10">
      <h2 className="text-black text-xl font-semibold">
        Tech Stack<span className="font-normal"> |</span>
      </h2>
      <div className="flex gap-4 items-center">
        <Link href="https://react.dev/">
          <Image
            src="/React.png"
            alt="React Logo"
            height={20}
            width={60}
            className="cursor-pointer opacity-75 hover:opacity-100"
          />
        </Link>
        <Link href="https://tailwindcss.com/">
          <Image
            src="/Tailwind.png"
            alt="Tailwind Logo"
            height={20}
            width={60}
            className="cursor-pointer opacity-50 hover:opacity-100"
          />
        </Link>
        <Link href="https://vercel.com/">
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            height={60}
            width={100}
            className="cursor-pointer opacity-75 hover:opacity-100"
          />
        </Link>
      </div>
      <div className="flex gap-4 items-center">
 
        <Link href="https://nextjs.org/">
          <Image
            src="/nextjs.svg"
            alt="Next Js Logo"
            height={60}
            width={40}
            className="cursor-pointer opacity-75 hover:opacity-100"
          />
        </Link>
        <Link href="https://create.t3.gg/">
          <Image
            src="/t3-logo.png"
            alt="T3 Logo"
            width={40}
            height={40}
            className="cursor-pointer opacity-75 hover:opacity-100"
          />
        </Link>
        <Link href="https://www.typescriptlang.org/">
          <Image
            src="/typescript.svg"
            alt="Typescript Logo"
            width={40}
            height={40}
            className="cursor-pointer opacity-75 hover:opacity-100"
          />
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <Link href="https://www.squarespace.com/">
          <Image
            src="/SquareSpaceLogo.png"
            alt="SquareSpace Logo"
            width={50}
            height={40}
            className="cursor-pointer opacity-75 hover:opacity-100"
          />
        </Link>
        <Link href="https://wordpress.com/">
          <Image
            src="/WordPressLogo.png"
            alt="WordPress Logo"
            width={50}
            height={40}
            className="cursor-pointer opacity-75 hover:opacity-100"
          />
        </Link>
      </div>
    </div>
    </>
  );
};

export default Techstack;
