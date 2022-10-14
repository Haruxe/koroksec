import React from "react";
import { ChevronUp, ChevronDown, Search } from "@styled-icons/boxicons-regular";
import Image from "next/image";

function index() {
  return (
    <>
      <div className="max-w-[1100px] mx-auto font-mono flex p-4 flex-col">
        <div className="w-1/2 place-content-center flex flex-col">
          <div>
            <p className="text-[1.5rem] my-10">~/bounties</p>
          </div>
          <div className="flex flex-row space-x-1">
            <button className="border px-3 py-1 mr-5 flex flex-row space-x-2">
              <h1 className="my-auto">Sort by</h1>
              <ChevronDown className="w-6 my-auto" />
            </button>
            <div className="flex flex-row border ">
              <input
                className="px-3 py-1 flex flex-row outline-none bg-transparent"
                placeholder="Search..."
              />
              <Search className="w-5 mr-2 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="border w-full p-5 flex flex-row align-middle space-x-4">
            <Image
              src="/favicon.ico"
              width="100"
              height="100"
              layout="intrinsic"
            />
            <div>
              <h1 className="my-auto text-xl tracking-wide">KorokDAO</h1>
              <p className="text-sm">
                KorokDAO is a decentralized, reputation based, autonomous bug
                bounty platform and security review protocol with live TVL and
                up-to-date bug bounty payouts governed by the users and the ones
                protected.
              </p>
            </div>
            <div>
              <h1>$50,000</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
