import Image from "next/image";
import React from "react";

const FunFacts = () => {
  return (
    <>
    <div className="hidden md:flex flex justify-center items-center min-h-[800px] bg-white drop-shadow-sm">
      <div className="flex items-start">
        <Image
          src="/Yoda.png"
          alt="Zen Pic"
          width={400}
          height={400}
          className="rounded-[20px] "
        />
        <div className="ml-20 flex flex-col gap-y-4">
          <h2 className="text-5xl font-bold text-indigo-500 te">Random Facts</h2>
          <p>I love working out</p>
          <p>I'm a bit of a clean freak</p>
          <p>I love gaming</p>
          <p>I am a big fan of Star Wars</p>
          <p>I'm slightly addicted to Instagram</p>
          <p>Yoda is favourite Character</p>
        </div>
      </div>
    </div>
    <div className="md:hidden flex flex-col justify-center items-center min-h-[800px] bg-white drop-shadow-sm p-6">
      <h2 className="text-3xl md:text-5xl font-bold text-indigo-500 mb-4 text-center">
        Random Facts
      </h2>
      <Image
        src="/Yoda.png"
        alt="Zen Pic"
        width={300}
        height={300}
        className="mx-auto rounded-[20px] mb-4"
      />
      <div className="flex flex-col gap-2 text-center">
        <p className="text-base md:text-lg">I love working out</p>
        <p className="text-base md:text-lg">I'm a bit of a clean freak</p>
        <p className="text-base md:text-lg">I love gaming</p>
        <p className="text-base md:text-lg">I am a big fan of Star Wars</p>
        <p className="text-base md:text-lg">I'm slightly addicted to Instagram</p>
        <p className="text-base md:text-lg">Yoda is my favorite Character</p>
      </div>
    </div>
    </>
  );
};

export default FunFacts;
