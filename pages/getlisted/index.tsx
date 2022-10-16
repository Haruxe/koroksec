import React, { useState } from "react";
import { ChevronUp, ChevronDown, Search } from "@styled-icons/boxicons-regular";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import placeHolder from "/public/images/placeholder.png";

function index() {
  const [selectedImage, setSelectedImage] = useState(placeHolder);
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  );
  const [website, setWebsite] = useState("https://test.com");
  const [name, setName] = useState("Project Name");

  return (
    <>
      <div className="max-w-[1100px] mx-auto font-mono flex p-4 flex-col">
        <div className="w-1/2 place-content-center flex flex-col">
          <div>
            <p className="text-lg mb-10">~/pages/getlisted</p>
          </div>
        </div>
        <p className="text-lg font-bold mb-6">Information</p>
        <div className="md:space-x-10 md:space-y-0 space-y-10 flex md:flex-row flex-col md:place-items-center">
          <div>
            <h1 className="font-bold text-sm mb-3">
              Project Image <span className="text-[#80c027]">*</span>
            </h1>
            <div className="w-[100px] h-[100px] relative flex-none p-1 border">
              <Image src={selectedImage} layout="fill" className="my-auto" />
              {/* <input type="file" className="cursor-pointer" /> */}
            </div>
          </div>
          <div className="md:my-auto">
            <h1 className="font-bold text-sm">
              Project Name <span className="text-[#80c027]">*</span>
            </h1>
            <input
              className="px-3 py-1 flex flex-row border bg-transparent mt-4 outline-none w-full"
              placeholder="-"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="md:my-auto">
            <h1 className="font-bold text-sm">Project Website</h1>
            <input
              className="px-3 py-1 flex flex-row border bg-transparent mt-4 outline-none w-full"
              placeholder="-"
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
        </div>
        <div>
          <h1 className="mt-10 font-bold text-sm">
            Overview <span className="text-[#80c027]">*</span> -{" "}
            <a href="https://commonmark.org/help/" className="text-[#ccd5ff]">
              Markdown Format
            </a>
          </h1>
          <p className="text-xs leading-relaxed mt-2 text-gray-400">
            Provide what your protocol does, what problems it solves, what makes
            it unique, as well as any additional links/resources that will help
            security researchers understand how it works.
          </p>
          <textarea
            className="px-3 py-2 h-[14rem] flex flex-row border bg-transparent mt-4 outline-none w-full resize-none"
            placeholder="-"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <p className="text-lg font-bold mt-10">Define Your Scope</p>
        <p className="text-xs leading-relaxed mt-2 text-gray-400 mb-6">
          Add the links to sources in scope - whether that be GitHub, Block
          Explorer, or wherever they are located. Supply at least one.
        </p>
        <div className="flex flex-row space-x-5">
          <button className="bg-white hover:bg-[#EEEEEE] border flex text-sm text-black px-4 py-2">
            + ADD SOURCE
          </button>
        </div>
        <div className="mt-10">
          <div className="md:my-auto">
            <h1 className="font-bold text-sm">
              Source 1 <span className="text-[#80c027]">*</span>
            </h1>
            <input
              className="px-3 py-1 flex flex-row border bg-transparent mt-4 outline-none md:w-1/2 w-full"
              placeholder="-"
            />
          </div>
        </div>
        <p className="text-lg font-bold mt-10">Preview</p>
        <p className="text-xs leading-relaxed mt-2 text-gray-400 mb-6">
          What others will see:
        </p>
        <p className="text-3xl font-bold mb-6">{name}</p>
        <ReactMarkdown>{description}</ReactMarkdown>
        <button className="border px-4 py-2 md:text-xl ml-auto mt-10 hover:bg-[#1A1A1A] cursor-not-allowed">
          &gt;_ Get Listed
        </button>
      </div>
    </>
  );
}
export default index;
