import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <>
      <div className="max-w-[1100px] mx-auto font-mono flex p-4 ">
        <motion.div
          className="h-[80vh] place-content-center flex flex-col"
          initial={{ x: -200 }}
          animate={{ x: 0 }}
        >
          <div>
            <h1 className="md:text-[4rem] text-[3rem] my-auto mt-3">
              Prevent.
              <br /> Evolve. <span className="text-[#80c027] ">$Earn.</span>
            </h1>
            <p className="md:text-[1rem] text-[.75rem] md:my-10 my-8">
              The future of blockchain security
              <br /> is decentralized.
            </p>
            <Link href="/explore">
              <a className="border px-5 py-4 mr-5 duration-300 rounded-full hover:border-white border-gray-800 tracking-wide">
                Hunt
              </a>
            </Link>
            <Link href="/getlisted">
              <a className="border px-5 py-4 mr-5 duration-300 rounded-full hover:border-white border-gray-800 tracking-wide">
                Get Listed
              </a>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
