import React from "react";
import { ChevronUp, ChevronDown, Search } from "@styled-icons/boxicons-regular";
import Image from "next/image";

function index() {
  // @ts-ignore
  function BountyPage({ name, desc, pay, picture }) {
    return (
      <div className="border border-[#666666] mx-auto p-5 flex flex-row align-middle space-x-4 select-none cursor-pointer hover:bg-[#1A1A1A]">
        <div className="w-[80px] flex my-auto">
          <Image src={picture} width="100" height="100" alt={name} />
        </div>
        <div className="my-auto">
          <h1 className="my-auto text-xl tracking-wide">
            {name} {pay}
          </h1>
          <p className="text-xs mt-1">{desc}</p>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="max-w-[1100px] mx-auto font-mono flex p-4 flex-col">
        <div className="w-1/2 place-content-center flex flex-col">
          <div>
            <p className="text-lg mb-10">~/pages/bounties</p>
          </div>
          <div className="flex flex-row space-x-1">
            <select
              className="border border-[#666666] px-3 py-1 mr-5 flex flex-row space-x-2 bg-transparent"
              defaultValue={"sort"}
            >
              <option value="sort" hidden>
                Sort By
              </option>
              <option value="new">New</option>
              <option value="payInc">TVL</option>
            </select>
            <div className="flex flex-row border border-[#666666] ">
              <input
                className="px-3 py-1 flex flex-row outline-none bg-transparent"
                placeholder="Search..."
              />
              <Search className="w-5 mr-2 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <BountyPage
            desc="KorokDAO is a decentralized, reputation based, autonomous bug bounty
            platform and security review protocol with live TVL and up-to-date
            bug bounty payouts governed by the users and the ones protected."
            name="KorokDAO"
            picture="/images/korok.png"
            pay="$0"
          />
        </div>
      </div>
    </>
  );
}

export default index;
