import React from "react";
import Techstack from "./TechStack";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { BookmarkIcon } from "lucide-react";
import Video from "./Video";
import User from "../Cards/User";
import Website from "../Projects/Website";

const Tools = () => {
  return (
    <>
    <div className=" flex-col min-h-screen items-center justify-center flex hidden md:flex">
      <div className="flex flex-col justify-center items-center my-auto">
        <div className="flex items-center justify-center gap-x-12">
          <div className="flex flex-col">
            <h2 className="text-7xl font-bold text-indigo-500">
              Tools Used to
            </h2>
            <h3 className="text-7xl font-bold text-indigo-500">
              {" "}
              Kickstart Dev.
            </h3>
            <div className="font-normal mt-10 flex flex-col">
              <span>
                Being a junior coder, I'm consistently in pursuit of the latest
              </span>
              <span>tools to elevate my skill set. I embrace cutting-edge</span>
              <span>
                technologies such as React, NextJS, and Tailwindcss to
              </span>
              <span>
                breathe life into your vision, propelling your next
                groundbreaking
              </span>
              <span>
                project to the forefront of innovation. Embark on the journey
              </span>
              <span>to unleash your next Great Idea with my expertise!</span>
            </div>
          </div>
          <Website />
        </div>
        <Techstack />
      </div>
      
      </div>
      <div className="md:hidden flex flex-col justify-center items-center min-h-screen">
        <div className="flex flex-col items-center ">
          <h2 className="text-3xl md:text-5xl font-bold text-indigo-500 mb-4">
            Tools Used to Kickstart Dev.
          </h2>
          <div className="font-normal text-center mb-8">
            <p>
              Being a junior coder, I'm consistently in pursuit of the latest
              tools to elevate my skill set. I embrace cutting-edge technologies
              such as React, NextJS, and Tailwindcss to breathe life into your
              vision, propelling your next groundbreaking project to the
              forefront of innovation.
            </p>
            <p>
              Embark on the journey to unleash your next Great Idea with my
              expertise!
            </p>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row  items-center justify-center gap-4">
          <div className="p-2 border mb-4 md:mb-0">
            <Switch />
            <Button className="mt-2 ml-4">
              <BookmarkIcon width="16" height="16" /> Bookmark
            </Button>
          </div>
          <div className="border p-2">
            <User />
          </div>
        </div>
        <Video />
        <Techstack />
      </div>
    </>
  );
};

export default Tools;
