import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <div className="max-w-[1100px] mx-auto font-mono flex p-4 ">
        <div className="h-[80vh] place-content-center flex flex-col">
          <div>
            <h1 className="md:text-[4rem] text-[3rem] my-auto">
              Protect.
              <br /> Learn. <span className="text-[#80c027] ">Earn.</span>
            </h1>
            <p className="md:text-[1rem] text-[.75rem] md:my-10 my-8">
              The future of blockchain security
              <br /> is decentralized.
            </p>
            <Link href="/bounties">
              <a className="bg-white hover:bg-[#EEEEEE] border  text-black px-4 py-2 md:text-xl mr-5">
                $_ Hunt
              </a>
            </Link>
            <Link href="/getlisted">
              <a className="border px-4 py-2 md:text-xl hover:bg-[#1A1A1A]">
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
