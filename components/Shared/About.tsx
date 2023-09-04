import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
   <div className="hidden md:flex flex justify-center items-center min-h-[800px] bg-neutral-100 drop-shadow-sm border">
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <div className="text-black flex items-start flex-col my-8">
            <h2 className="font-bold text-7xl text-indigo-500">About.</h2>
            <p className="flex flex-col text-2xl mt-4 items-start">
              I'm passionate Junior Front-End Developer based in
              <span> Malaysia with a keen eye for crafting exceptional </span>
              <span> digital experiences.</span>
            </p>
            <p className=" text-xl mt-4 flex flex-col items-start justify-center">
              Since 2022, I've been having a blast making complicated stuff easy
              <span> to use with pretty design. When I'm not busy with pixels,</span>
              <span>you'll find me going to the gym, gardening or spending time</span>
              <span>with my family.</span>
            </p>
          </div>
          <Image
            src="/profile2.jpg"
            alt="Develop"
            width={480}
            height={1000}
            className="ml-20 mt-20 rounded-lg "
          />
        </div>
      </div>
    </div>
    <div className="md:hidden bg-neutral-100 p-6 drop-shadow-sm border">
      <h2 className="font-bold text-4xl text-indigo-500 mt-20 mb-4">About.</h2>
      <div className="flex flex-col items-center">
        <Image
          src="/profile2.jpg"
          alt="Develop"
          width={480}
          height={1000}
          className="mb-4 rounded-lg"
        />
        <div className="text-black text-lg">
          <p className="mb-4">
            I'm a passionate Junior Front-End Developer based in Malaysia with a keen eye for crafting exceptional digital experiences.
          </p>
          <p className="mb-4">
            Since 2022, I've been having a blast making complicated stuff easy to use with pretty design. When I'm not busy with pixels, you'll find me going to the gym, gardening, or spending time with my family.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
