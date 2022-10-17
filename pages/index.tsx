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
            <svg width="150" height="78" viewBox="0 0 100 52.17391304347826">
              <defs>
                <linearGradient id="SvgjsLinearGradient2077">
                  <stop
                    id="SvgjsStop2078"
                    stop-color="#006838"
                    offset="0"
                  ></stop>
                  <stop
                    id="SvgjsStop2079"
                    stop-color="#96cf24"
                    offset="1"
                  ></stop>
                </linearGradient>
              </defs>
              <g
                transform="matrix(1.4492753744125366,0,0,1.4492753744125366,-21.73913043478261,-46.3768115942029)"
                fill="url(#SvgjsLinearGradient2077)"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M81,62v-3h-3v-3h3v-3h-3h-3v-3h-3v-3h3v-3h-3h-3v3h-3v-3h3v-3v-3h-3v3h-3v-3v-3h-3v3h-3v-3h-3v-3h-3v3h-3v-3h-3v3v3h-3v-3  h-3v3v3h-3v-3h-3v3v3h3v3h-3v-3h-3v3v3h-3v3h-3v-3h-3h-3v3h-3v3v3v3h3h3h3h3h3h3v3v3h3h3v-3h3v3h3h3v-3h3h3v3h3h3v-3h3v3h3h3v-3v-3  h3v3h3h3h3h3v-3H81z M21,59v-3h3v3H21z"
                ></path>
              </g>
            </svg>
            <h1 className="md:text-[4rem] text-[3rem] my-auto mt-3">
              Prevent.
              <br /> Evolve. <span className="text-[#80c027] ">$Earn.</span>
            </h1>
            <p className="md:text-[1rem] text-[.75rem] md:my-10 my-8">
              The future of blockchain security
              <br /> is decentralized.
            </p>
            <Link href="/bounties">
              <a className="bg-white hover:bg-[#EEEEEE] border  text-black px-4 py-2 md:text-xl mr-5  duration-200">
                $_ Hunt
              </a>
            </Link>
            <Link href="/getlisted">
              <a className="border px-4 py-2 md:text-xl hover:bg-[#1A1A1A]  duration-200">
                &gt;_ Get Listed
              </a>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
