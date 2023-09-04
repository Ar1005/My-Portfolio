import React from "react";

const Video = () => {
  return (
    <>
      <div className="md:flex hidden">
        <video className="w-[400px] rounded-lg flex ml-52" controls>
          <source src="/RickRoll.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="md:hidden w-full items-center flex justify-center overflow-hidden my-10">
        <video className="w-[400px] rounded-lg" controls>
          <source src="/RickRoll.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Video;
