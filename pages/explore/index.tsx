import React from "react";
import { ChevronUp, ChevronDown, Search } from "@styled-icons/boxicons-regular";
import Image from "next/image";
import { Verified } from "styled-icons/material";
import Link from "next/link";

function Home() {
  // @ts-ignore
  function BountyPage({ name, pay, picture, website }) {
    return (
      <>
        <div className="border border-[#666666] mx-auto p-10 md:p-5 align-middle relative flex flex-col md:flex-row md:space-y-0 space-y-8">
          <div className="flex-col flex md:flex-row md:space-x-10 md:space-y-0 space-y-8 md:mx-0 mx-auto">
            <div className="w-[60px] flex my-auto">
              <Image src={picture} width="100" height="100" alt={name} />
            </div>
            <div className="my-auto">
              <div className="flex flex-row space-x-1">
                <Verified className="w-4" />
                <h1 className="my-auto tracking-wide">{name}</h1>
              </div>
              <a
                className="my-auto text-sm tracking-wide text-gray-400"
                href={website}
              >
                {website}
              </a>
            </div>
            <h1 className="my-auto md:ml-auto">Up to {pay}</h1>
          </div>
          <div className="flex mt-auto ml-auto">
            <Link href={"/bounty/" + name}>
              <a className="border px-5 py-3 hover:bg-[#1A1A1A] duration-200 md:mx-0 mx-auto my-auto md:ml-auto md:mr-0 mr-auto ">
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
        <div className="w-1/2 place-content-center flex flex-col">
          <div>
            <p className="text-lg mb-10">~/pages/explore</p>
          </div>
          <div className="flex flex-row space-x-5">
            <div>
              <h1 className="ml-1 mb-1 text-sm">Sort By</h1>
              <select
                className="border border-[#666666] px-3 py-1 flex flex-row space-x-2 bg-transparent"
                defaultValue={"new"}
              >
                <option value="new">New</option>
                <option value="payInc">TVL</option>
              </select>
            </div>
            <div>
              <h1 className="ml-1 mb-1 text-sm">Filter</h1>
              <select
                className="border border-[#666666] px-3 py-1 flex flex-row space-x-2 bg-transparent"
                defaultValue={"all"}
              >
                <option value="all">All</option>
                <option value="new">Websites</option>
                <option value="payInc">Smart Contracts</option>
              </select>
            </div>

            <div className="flex flex-row border border-[#666666] mt-auto">
              <input
                className="px-3 py-1 flex flex-row outline-none bg-transparent"
                placeholder="Search..."
              />
              <Search className="w-5 mr-2 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="mt-10 space-y-4 mx-auto md:mx-0">
          <BountyPage
            name="KorokDAO"
            picture="/favicon.ico"
            website="https://korokdao.xyz"
            pay="50,000 DAI"
          />
          <BountyPage
            name="KorokDAO"
            picture="/favicon.ico"
            website="https://korokdao.xyz"
            pay="50,000 DAI"
          />
          <BountyPage
            name="KorokDAO"
            picture="/favicon.ico"
            website="https://korokdao.xyz"
            pay="50,000 DAI"
          />
          <BountyPage
            name="KorokDAO"
            picture="/favicon.ico"
            website="https://korokdao.xyz"
            pay="50,000 DAI"
          />
          <BountyPage
            name="KorokDAO"
            picture="/favicon.ico"
            website="https://korokdao.xyz"
            pay="50,000 DAI"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
