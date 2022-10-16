import React from "react";
import { ChevronUp, ChevronDown, Search } from "@styled-icons/boxicons-regular";
import Image from "next/image";

function Home() {
  // @ts-ignore
  function BountyPage({ name, pay, picture }) {
    return (
      <div className="border border-[#666666] mx-auto p-5 flex flex-row align-middle space-x-10">
        <div className="w-[60px] flex my-auto">
          <Image src={picture} width="100" height="100" alt={name} />
        </div>
        <div className="my-auto">
          <h1 className="my-auto tracking-wide">
            {name} {pay}
          </h1>
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
          <BountyPage name="KorokDAO" picture="/images/korok.png" pay="$0" />
        </div>
      </div>
    </>
  );
}

export default Home;
