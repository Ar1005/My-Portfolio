"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FiRefreshCw } from "react-icons/fi";
import { BiSolidLockAlt } from "react-icons/bi";
import Image from "next/image";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Website() {
  let [categories] = useState({
    Threads: [
      {
        id: 1,
        title: "threads-app-armando-pjkl.vercel.app",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
        imageUrl: "/Threads-app.png",
      },
    ],
    ThreadCraft: [
      {
        id: 1,
        title: "ds-app-armando-pjkl.vercel.app",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
        imageUrl: "/ThreadsCraft.png",
      },
    ],
  });

  return (
    <div className="bg-white w-[600px] sm:px-0 rounded-lg flex justify-start flex-col">
      <Tab.Group>
        <div className=" flex items-center bg-gray-800 rounded-t-lg">
          <div className="flex space-x-1 mx-2">
            <div className="h-2.5 w-2.5 rounded-full bg-gray-600 hover:bg-red-600"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-gray-600 hover:bg-yellow-300"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-gray-600 hover:bg-lime-500"></div>
          </div>
          <Tab.List className="flex pt-2 rounded-xl bg-gray-700/20 ">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-t-lg px-10 py-2 text-sm font-medium leading-5 text-gray-200",
                    " ",
                    selected ? "bg-gray-600 shadow" : "text-blue-100"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
        </div>

        <Tab.Panels className="">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames("rounded-xl bg-white", "  ")}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md flex flex-col w-full hover:bg-gray-100"
                  >
                    <h3 className="text-sm font-medium flex items-center py-2 gap-4 bg-gray-600">
                      <div className="flex gap-x-3 pl-2">
                        <AiOutlineArrowLeft className=" h-4 w-4 text-gray-400"></AiOutlineArrowLeft>
                        <AiOutlineArrowRight className=" h-4 w-4 text-gray-400"></AiOutlineArrowRight>
                        <FiRefreshCw className=" h-4 w-4 text-gray-400"></FiRefreshCw>
                      </div>
                      <div className="bg-gray-800 flex items-center w-full rounded-md py-3 px-1 text-neutral-100">
                        <div className="px-2">
                          <BiSolidLockAlt className="text-black"></BiSolidLockAlt>
                        </div>
                        {post.title}
                      </div>
                    </h3>
                    <div className="flex flex-1 ">
                      <Image
                        src={post.imageUrl}
                        alt="Threads"
                        width={600}
                        height={600}
                        layout="responsive"
                        className="flex-1 items-center rounded-b-lg object-cover "
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
