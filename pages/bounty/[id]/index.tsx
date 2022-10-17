import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

function index() {
  return (
    <>
      <div className="max-w-[1100px] mx-auto font-mono flex p-4 flex-col">
        <div className="place-content-center flex flex-col">
          <div>
            <p className="text-lg mb-10">~/pages/bounties</p>
          </div>
          <div className="flex flex-row space-x-5">
            <div className="w-[130px] h-[130px] relative flex-none p-1 border">
              <Image
                src={"/favicon.ico"}
                layout="fill"
                className="my-auto bg-black"
                alt="photo"
              />
            </div>
            <div className="my-auto">
              <p className="text-3xl font-bold">KorokDAO</p>
              <p className="text-gray-400 mt-1">https://korokdao.xyz</p>
            </div>
          </div>
          <ReactMarkdown className="flex mt-8">
            KorokDAO is the most transparent, decentralized, and secure web3 bug
            bounty platform for white-hats and protocols to grow their
            reputation. KorokDAO cuts the middle-man; unlike alternative
            platforms, Korok is the first P2P bug bounty protocol that allows
            hackers to directly communicate with protected services using the
            platform, as apposed to using a third-party triaging service that
            can be slow, unresponsive, and unreliable.
          </ReactMarkdown>
          <div className="mt-10">
            <div className="mt-5" key="i">
              <h1 className="font-bold ">Source 1</h1>
              <div className="w-full flex flex-row mt-2 text-sm">
                <h1 className="text-[#80c027]">0xBLABLA</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
