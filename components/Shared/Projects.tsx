import React from "react";
import Threads from "../Projects/Threads";
import Color from "../Projects/Color";
import Image from "next/image";

const Projects = () => {
  return (
    <>
      <div className="hidden md:flex flex flex-col justify-center items-center min-h-screen">
        <div className="flex flex-col mt-10">
          <div className="text-black flex items-center mx-auto">
            <div className="flex items-center">
              <div className="text-black flex items-start flex-col mb-8">
                <h2 className="font-bold text-7xl text-indigo-500">
                  Portfolio.
                </h2>
                <p className="flex flex-col text-xl mt-4 items-center">
                  Check out some of my latest projects
                </p>
                <p className=" text-xl mt-4 flex flex-col items-start justify-center">
                  Every project I make is a captivating puzzle of development
                  where
                  <span> each piece elegantly falls into place</span>
                </p>
              </div>
              <Image
                src="/develop.jpg"
                alt="Develop"
                width={600}
                height={1000}
                className="ml-20  rounded-lg "
              />
            </div>
          </div>
          <div className="flex gap-10">
            <Threads />
            <Color />
          </div>
        </div>
      </div>
      <div className="md:hidden flex flex-col justify-center items-center min-h-screen mt-24 p-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl text-indigo-500 font-bold mb-4">
            Portfolio.
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Check out some of my latest projects.
          </p>
          <p className="text-lg md:text-xl">
            Every project I make is a captivating puzzle of development where
            each piece elegantly falls into place.
          </p>
        </div>
        <div className="flex flex-col gap-6 mt-6">
          <Image
            src="/develop.jpg"
            alt="Develop"
            width={300}
            height={500}
            className="mx-auto rounded-lg"
          />
          <Threads />
          <Color />
        </div>
      </div>
    </>
  );
};

export default Projects;
