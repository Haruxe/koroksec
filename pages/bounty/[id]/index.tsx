import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Dot } from "@styled-icons/bootstrap/Dot";
import { Verified } from "styled-icons/material";

function index() {
  return (
    <>
      <div className="max-w-[1100px] mx-auto font-mono flex p-4 flex-col">
        <div className="place-content-center flex flex-col mt-4">
          <div className="flex flex-row w-full">
            <div className="w-[130px] h-[130px] relative flex-none p-1 border rounded-full border-gray-800 mr-5">
              <Image
                src={"/images/icon.png"}
                layout="fill"
                className="my-auto bg-black rounded-full"
                alt="photo"
              />
            </div>
            <div className="my-auto mr-5">
              <div className="flex flex-row space-x-2 place-content-center">
                <Verified className="w-6 my-auto" />
                <p className="text-3xl font-bold my-auto">KorokDAO</p>
              </div>
              <p className="text-gray-400 mt-1">https://korokdao.xyz</p>
            </div>
            <div className="my-auto border border-purple-300 text-purple-300 rounded-full px-3 py-2 flex flex-row space-x-2 mr-5">
              <Dot className="w-6" />
              <h1>Website</h1>
            </div>
            <div className="my-auto border border-red-300 text-red-300 rounded-full px-3 py-2 flex flex-row space-x-2">
              <Dot className="w-6" />
              <h1>Contract</h1>
            </div>
            <div className="my-auto ml-auto cursor-pointer border px-6 rounded-full py-4 border-gray-800 font-bold hover:border-[#80c027] duration-300">
              <button className="my-auto">
                <h1 className="text-md tracking-wide">Submit Finding</h1>
              </button>
            </div>
          </div>
          <div className="mt-8">
            <h1 className="text-2xl mb-3 font-black">Overview</h1>
            <ReactMarkdown className="flex text-gray-400">
              KorokDAO is the most transparent, decentralized, and secure web3
              bug bounty platform for white-hats and protocols to grow their
              reputation. KorokDAO cuts the middle-man; unlike alternative
              platforms, Korok is the first P2P bug bounty protocol that allows
              hackers to directly communicate with protected services using the
              platform, as apposed to using a third-party triaging service that
              can be slow, unresponsive, and unreliable.
            </ReactMarkdown>
            <div className="mt-10 flex flex-row">
              <table className="table-auto text-left mr-10">
                <thead className="border-b border-gray-600">
                  <tr>
                    <th className="font-bold px-6 py-4 text-left">TARGET</th>
                    <th className="font-bold px-6 py-4 text-left">TYPE</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-600">
                    <td className="text-sm font-light px-6 py-4">
                      https://korokdao.xyz
                    </td>
                    <td className="text-sm font-light px-6 py-4">Website</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="text-sm font-light px-6 py-4">
                      https://etherscan.io/address/0x19e63c6c6652207f0fae7b1ad51744469a08653a
                    </td>
                    <td className="text-sm font-light px-6 py-4">Contract</td>
                  </tr>
                  <tr className="border-gray-600">
                    <td className="text-sm font-light px-6 py-4">
                      https://etherscan.io/address/0x19e63c6c6652207f0fae7b1ad51744469a08653a
                    </td>
                    <td className="text-sm font-light px-6 py-4">Contract</td>
                  </tr>
                </tbody>
              </table>
              <table className="table-auto text-left w-[20rem]">
                <tbody className="text-sm">
                  <tr>
                    <td className="text-sm font-bold px-6 py-4 text-purple-300 rounded-full">
                      Critical
                    </td>
                    <td className="text-sm font-bold px-6 py-4">150,000 DAI</td>
                  </tr>
                  <tr>
                    <td className="text-sm font-bold px-6 py-4 text-red-300 rounded-full">
                      High
                    </td>
                    <td className="text-sm font-bold px-6 py-4">50,000 DAI</td>
                  </tr>
                  <tr>
                    <td className="text-sm font-bold px-6 py-4 text-orange-300 rounded-full">
                      Medium
                    </td>
                    <td className="text-sm font-bold px-6 py-4">10,000 DAI</td>
                  </tr>
                  <tr>
                    <td className="text-sm font-bold px-6 py-4  text-yellow-300 rounded-full">
                      Low
                    </td>
                    <td className="text-sm font-bold px-6 py-4">1,000 DAI</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
