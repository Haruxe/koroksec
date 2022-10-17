import React, { useEffect, useRef, useState } from "react";
import { ChevronUp, ChevronDown, Search } from "@styled-icons/boxicons-regular";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import placeHolder from "/public/images/placeholder.png";
import { X } from "styled-icons/bootstrap";

function Home() {
  const [selectedImage, setSelectedImage] = useState();
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [name, setName] = useState("");
  const sources = useRef([""]);
  const [sourceLength, setSourceLength] = useState(1);
  const [lowPayout, setLowPayout] = useState("0");
  const [mediumPayout, setMediumPayout] = useState("0");
  const [highPayout, setHighPayout] = useState("0");
  const [criticalPayout, setCriticalPayout] = useState("0");
  // @ts-ignore
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      let file = event.target.files[0];
      reader.onloadend = () => {
        // @ts-ignore
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="max-w-[1100px] mx-auto font-mono flex p-4 flex-col">
        <div className="w-1/2 place-content-center flex flex-col">
          <div>
            <p className="text-lg mb-10">~/pages/getlisted</p>
          </div>
        </div>
        <p className="text-lg font-bold mb-3">Information</p>
        <div className="w-full h-[1px] bg-gray-400" />
        <p className="text-xs leading-relaxed mt-2 text-gray-400 mb-6">
          Let&apos;s get the basics of your project down.
        </p>
        <div className="md:space-x-10 md:space-y-0 space-y-10 flex md:flex-row flex-col md:place-items-center">
          <div>
            <h1 className="font-bold text-sm mb-3">
              Project Image <span className="text-[#80c027]">*</span>
            </h1>

            <div className="w-[100px] h-[100px] relative flex-none p-1 border">
              <Image
                src={selectedImage ? selectedImage : placeHolder}
                layout="fill"
                className="my-auto bg-black"
                alt="photo"
              />
              <input
                type="file"
                className="cursor-pointer absolute w-full h-full opacity-0"
                accept=".png, .jpeg, .jpg"
                onChange={onImageChange}
              />
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
            <h1 className="font-bold text-sm">
              Project Website <span className="text-[#80c027]">*</span>
            </h1>
            <div className="md:w-1/2 w-full flex flex-row mt-4">
              <input
                className="px-3 py-1 flex flex-row border bg-transparent outline-none my-auto mr-3"
                placeholder="-"
                onChange={(e) => setWebsite(e.target.value)}
              />
              {website ? (
                <button className="bg-white hover:bg-[#EEEEEE] border flex text-sm text-black px-3 py-[6px] my-auto place-content-center duration-200">
                  <X className="w-6 text-red-500 flex my-auto" />
                  <h1 className="flex my-auto">VERIFY</h1>
                </button>
              ) : (
                <></>
              )}
            </div>
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
        <p className="text-lg font-bold mb-3 mt-6">Define Your Scope</p>
        <div className="w-full h-[1px] bg-gray-400" />
        <p className="text-xs leading-relaxed mt-2 text-gray-400 mb-6">
          Add the links to websites or block explorer in scope - their source
          code must be verified. Supply at least one.
        </p>
        <div className="flex flex-row space-x-5">
          <button
            className="bg-white hover:bg-[#EEEEEE] border flex text-sm text-black px-4 py-2 duration-200"
            onClick={() => {
              if (sourceLength < 10) {
                sources.current.push("");
                setSourceLength(sourceLength + 1);
              }
            }}
          >
            + ADD SOURCE
          </button>
          {sources.current.length > 1 ? (
            <button
              className="bg-white hover:bg-[#EEEEEE] border flex text-sm text-black px-4 py-2 duration-200"
              onClick={() => {
                if (sources.current.length > 1) {
                  sources.current.pop();
                  setSourceLength(sourceLength - 1);
                }
              }}
            >
              - REMOVE
            </button>
          ) : (
            <></>
          )}
        </div>
        <div className="mt-10">
          {sources.current.map((e, i) => {
            if (i === 0) {
              return (
                <div className="md:my-auto" key="i">
                  <h1 className="font-bold text-sm">
                    Source 1 <span className="text-[#80c027]">*</span>
                  </h1>
                  <div className="md:w-1/2 w-full flex flex-row mt-4">
                    <input
                      className="px-3 py-1 flex flex-row border bg-transparent outline-none my-auto mr-3"
                      placeholder="-"
                      onChange={(e) => (sources.current[0] = e.target.value)}
                    />
                    <button className="bg-white hover:bg-[#EEEEEE] border flex text-sm text-black px-3 py-[6px] my-auto place-content-center duration-200">
                      <X className="w-6 text-red-500 flex my-auto" />
                      <h1 className="flex my-auto">VERIFY</h1>
                    </button>
                  </div>
                </div>
              );
            } else
              return (
                <div className="mt-5">
                  <h1 className="font-bold text-sm">Source {i + 1}</h1>
                  <div className="md:w-1/2 w-full flex flex-row mt-4">
                    <input
                      className="px-3 py-1 flex flex-row border bg-transparent outline-none my-auto mr-3"
                      placeholder="-"
                      onChange={(e) =>
                        (sources.current[i + 1] = e.target.value)
                      }
                    />
                    <button className="bg-white hover:bg-[#EEEEEE] border flex text-sm text-black px-3 py-[6px] my-auto place-content-center duration-200">
                      <X className="w-6 text-red-500 flex my-auto" />
                      <h1 className="flex my-auto">VERIFY</h1>
                    </button>
                  </div>
                </div>
              );
          })}
        </div>
        <p className="text-lg font-bold mb-3 mt-8">Payouts</p>
        <div className="w-full h-[1px] bg-gray-400" />
        <p className="text-xs leading-relaxed mt-2 text-gray-400 mb-4">
          The general guide is 5% - 10% of total TVL for critical, and the rest
          is up to you. The higher the payout, the greater chance for a
          white-hat to responsibly disclose a vulnerability rather than taking
          matters into their own hands. <br />
          <br /> Feel free to provide a range, and be sure to specify the token
          which will be used - whether that be ETH, USDC, or your own token.
          <br />
          <br /> For example:
        </p>
        <div className="mb-6 opacity-60 select-none flex flex-col">
          <h1 className="font-bold text-sm border border-purple-400 text-purple-400 p-2 mr-auto">
            Critical
          </h1>
          <div className="md:w-1/2 w-full flex flex-row mt-4 select-none">
            <input
              className="px-3 py-1 flex flex-row border bg-transparent outline-none my-auto mr-3 select-none cursor-default"
              value={"50,000 DAI"}
              onChange={(e) => setCriticalPayout(e.target.value)}
              readOnly
            />
          </div>
        </div>
        <p className="text-lg font-bold">Smart Contract</p>
        <div className="w-[2rem] h-[1px] bg-gray-400 mb-3 mt-1" />
        <div className="space-y-5 md:space-y-0 flex md:flex-row flex-col md:place-content-between ">
          <div className="flex flex-col">
            <h1 className="font-bold text-sm border border-purple-400 text-purple-400 p-2 mr-auto">
              Critical
            </h1>
            <div className="md:w-1/2 w-full flex flex-row mt-4">
              <input
                className="px-3 py-1 flex flex-row border bg-transparent outline-none my-auto mr-3"
                placeholder="40,000 DAI"
                onChange={(e) => setCriticalPayout(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-sm border border-red-400 text-red-400 p-2 mr-auto">
              High
            </h1>
            <div className="md:w-1/2 w-full flex flex-row mt-4">
              <input
                className="px-3 py-1 flex flex-row border bg-transparent outline-none my-auto mr-3"
                placeholder="10,000 USDC"
                onChange={(e) => setHighPayout(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-sm border border-orange-300 text-orange-300 p-2 mr-auto">
              Medium
            </h1>
            <div className="md:w-1/2 w-full flex flex-row mt-4">
              <input
                className="px-3 py-1 flex flex-row border bg-transparent outline-none my-auto mr-3"
                placeholder="5,000 USDT"
                onChange={(e) => setMediumPayout(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-sm border border-yellow-200 text-yellow-200 p-2 mr-auto">
              Low
            </h1>
            <div className="md:w-1/2 w-full flex flex-row mt-4">
              <input
                className="px-3 py-1 flex flex-row border bg-transparent outline-none my-auto mr-3"
                placeholder="1 ETH"
                onChange={(e) => setLowPayout(e.target.value)}
              />
            </div>
          </div>
        </div>
        <p className="text-lg font-bold mt-8">Websites</p>
        <div className="w-[2rem] h-[1px] bg-gray-400 mb-3 mt-1" />
        <div className="space-y-5 md:space-y-0 flex md:flex-row flex-col md:place-content-between ">
          <div className="flex flex-col">
            <h1 className="font-bold text-sm border border-purple-400 text-purple-400 p-2 mr-auto">
              Critical
            </h1>
            <div className="md:w-1/2 w-full flex flex-row mt-4">
              <input
                className="px-3 py-1 flex flex-row border bg-transparent outline-none my-auto mr-3"
                placeholder="30,000 DAI"
                onChange={(e) => setCriticalPayout(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-sm border border-red-400 text-red-400 p-2 mr-auto">
              High
            </h1>
            <div className="md:w-1/2 w-full flex flex-row mt-4">
              <input
                className="px-3 py-1 flex flex-row border bg-transparent outline-none my-auto mr-3"
                placeholder="10,000 USDC"
                onChange={(e) => setHighPayout(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-sm border border-orange-300 text-orange-300 p-2 mr-auto">
              Medium
            </h1>
            <div className="md:w-1/2 w-full flex flex-row mt-4">
              <input
                className="px-3 py-1 flex flex-row border bg-transparent outline-none my-auto mr-3"
                placeholder="1,000 USDT"
                onChange={(e) => setMediumPayout(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-sm border border-yellow-200 text-yellow-200 p-2 mr-auto">
              Low
            </h1>
            <div className="md:w-1/2 w-full flex flex-row mt-4">
              <input
                className="px-3 py-1 flex flex-row border bg-transparent outline-none my-auto mr-3"
                placeholder="0.420 ETH"
                onChange={(e) => setLowPayout(e.target.value)}
              />
            </div>
          </div>
        </div>

        <p className="text-lg font-bold mb-3 mt-8">Preview</p>
        <div className="w-full h-[1px] bg-gray-400" />
        <p className="text-xs leading-relaxed mt-2 text-gray-400 mb-6">
          What others will see _
        </p>
        <div className="flex flex-row space-x-5">
          {selectedImage ? (
            <div className="w-[150px] h-[150px] relative flex-none p-1 border">
              <Image
                src={selectedImage}
                layout="fill"
                className="my-auto bg-black"
                alt="photo"
              />
            </div>
          ) : (
            <></>
          )}
          <div className="my-auto">
            <p className="text-3xl font-bold">{name}</p>
            <p className="text-gray-400 mt-1">{website}</p>
          </div>
        </div>
        <ReactMarkdown className="flex mt-8">{description}</ReactMarkdown>
        <div className="mt-10">
          {sources.current.map((e, i) => {
            if (e !== "")
              return (
                <div className="mt-5" key="i">
                  <h1 className="font-bold ">Source {i + 1}</h1>
                  <div className="w-full flex flex-row mt-2 text-sm">
                    <h1 className="text-[#80c027]">{e}</h1>
                  </div>
                </div>
              );
          })}
        </div>
        <button className="border px-4 py-2 md:text-xl ml-auto mt-10 hover:bg-[#1A1A1A] cursor-not-allowed  duration-200">
          &gt;_ Get Listed
        </button>
      </div>
    </>
  );
}
export default Home;
