import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <div className="max-w-[1100px] mx-auto font-mono flex p-4 ">
        <div className="w-1/2 h-[80vh] place-content-center flex flex-col">
          <div>
            <h1 className="text-[4rem] my-auto">
              Protect. Learn. <span className="text-[#80c027] ">Earn.</span>
            </h1>
            <p className="text-[1.5rem] my-10">
              The future of blockchain security is decentralized.
            </p>
            <Link href="/bounties">
              <a className="bg-white hover:bg-[#EEEEEE] border  text-black px-4 py-2 text-xl mr-5">
                $_ Hunt
              </a>
            </Link>
            <Link href="/protection">
              <a className="border px-4 py-2 text-xl hover:bg-[#1A1A1A]">
                &gt;_ Get Listed
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
