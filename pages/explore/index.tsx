import React from "react";
import { ChevronUp, ChevronDown, Search } from "@styled-icons/boxicons-regular";
import Image from "next/image";
import { Verified } from "styled-icons/material";
import Link from "next/link";
import { Dot } from "styled-icons/bootstrap";

function Home() {
  // @ts-ignore
  function BountyPage({ name, pay, picture, website }) {
    return (
      <>
        <div className="border border-gray-800 rounded-xl mx-auto p-10 md:p-5 align-middle relative flex flex-col md:flex-row md:space-y-0 space-y-8 duration-300">
          <div className="flex-col flex md:flex-row md:space-x-6 md:space-y-0 space-y-8 md:mx-0 mx-auto place-items-center">
            <div className="w-[60px] flex my-auto p-[1px] bg-gray-800 rounded-full">
              <Image
                src={picture}
                width="100"
                height="100"
                alt={name}
                className="rounded-full"
              />
            </div>
            <div className="my-auto flex flex-col place-content-center">
              <div className="flex flex-row space-x-1">
                <Verified className="w-4" />
                <h1 className="my-auto tracking-wide">{name}</h1>
              </div>
              <a
                className="mt-1 text-sm tracking-wide text-gray-400"
                href={website}
              >
                {website}
              </a>
            </div>
            <div className="my-auto text-sm border border-purple-300 text-purple-300 rounded-full px-2 py-1 flex flex-row mr-5">
              <Dot className="w-6" />
              <h1>Website</h1>
            </div>
            <div className="my-auto text-sm border border-red-300 text-red-300 rounded-full px-2 py-1 flex flex-row ">
              <Dot className="w-6" />
              <h1>Contract</h1>
            </div>
          </div>
          <div className="flex mt-auto ml-auto">
            <Link href={"/bounty/" + name}>
              <a className="border px-4 py-3 rounded-full duration-300 text-sm md:mx-0 mx-auto my-auto md:ml-auto md:mr-0 mr-auto hover:border-gray-100 border-gray-800">
                View Bounty
              </a>
            </Link>{" "}
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="max-w-[1100px] mx-auto font-mono flex p-4 flex-col">
        <div className="place-content-center flex flex-col mt-4">
          <div className="flex flex-row space-x-5">
            <div>
              <h1 className="ml-2 mb-3 text-sm">Sort By</h1>
              <select
                className="border border-gray-800 text-sm rounded-full px-3 py-2 flex flex-row space-x-2 bg-transparent"
                defaultValue={"new"}
              >
                <option value="new">New</option>
                <option value="payInc">TVL</option>
              </select>
            </div>
            <div>
              <h1 className="ml-2 mb-3 text-sm">Filter</h1>
              <select
                className="border border-gray-800 text-sm px-3 py-2 rounded-full flex flex-row space-x-2 bg-transparent"
                defaultValue={"all"}
              >
                <option value="all">All</option>
                <option value="new">Websites</option>
                <option value="payInc">Smart Contracts</option>
              </select>
            </div>

            <div className="flex flex-row border border-gray-800 mt-auto rounded-full">
              <input
                className="px-3 py-2 flex text-sm flex-row outline-none bg-transparent rounded-full"
                placeholder="Search..."
              />
              <Search className="w-4 mr-2 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="mt-10 space-y-4 mx-auto md:mx-0">
          <BountyPage
            name="KorokDAO"
            picture="/images/icon.png"
            website="https://korokdao.xyz"
            pay="50,000 DAI"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
