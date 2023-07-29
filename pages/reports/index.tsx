import React from "react";
import { ChevronUp, ChevronDown, Search } from "@styled-icons/boxicons-regular";
import Image from "next/image";

function Home() {
  return (
    <>
      <div className="max-w-[800px] min-h-[88vh] mx-auto font-mono flex p-4 flex-col">
        <div className="w-1/2 place-content-center flex flex-col">
          <div>
            <p className="text-lg mb-10">~/pages/reports</p>
          </div>
        </div>
        <h1 className="">Coming Soon...</h1>
        <p className="text-md leading-relaxed mt-5"></p>
      </div>
    </>
  );
}
export default Home;
