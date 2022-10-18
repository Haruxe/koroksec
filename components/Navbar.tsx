import Link from "next/link";
import React, { useEffect, useState } from "react";
import { DiscordAlt } from "@styled-icons/boxicons-logos/DiscordAlt";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Twitter } from "@styled-icons/evaicons-solid/Twitter";
import { Menu } from "@styled-icons/boxicons-regular/Menu";
import Image from "next/image";
import { ethers } from "ethers";
import { Exit } from "styled-icons/boxicons-regular";
import { Profile } from "styled-icons/icomoon";
import { FaceMask } from "styled-icons/boxicons-solid";

function Navbar() {
  const [loggedIn, setLoggedIn] = useState("0");
  const [address, setAddress] = useState("");
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  function handleResize() {
    // Set window width/height to state
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  async function checkIfLoggedIn() {
    // // @ts-ignore
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // // @ts-ignore
    // const isUnlocked = await window?.ethereum?._metamask.isUnlocked();
    // if (isUnlocked) {
    //   setLoggedIn("1");
    //   const signer = provider.getSigner();
    //   const addresses = await provider.send("eth_requestAccounts", []);
    //   setAddress(ethers.utils.getAddress(addresses[0]));
    // }
  }

  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  function KorokSVG() {
    return (
      <svg
        width="50"
        height="26"
        viewBox="0 0 100 52.17391304347826"
        className=""
      >
        <defs>
          <linearGradient id="SvgjsLinearGradient2077">
            <stop id="SvgjsStop2078" stop-color="#006838" offset="0"></stop>
            <stop id="SvgjsStop2079" stop-color="#96cf24" offset="1"></stop>
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
    );
  }

  // @ts-ignore
  function NavButton({ text, link }) {
    return (
      <div className="my-auto cursor-pointer border px-4 rounded-full py-3 border-gray-800 font-bold hover:border-gray-100 duration-200">
        <Link href={link}>
          <a className="my-auto">
            <h1 className="text-sm tracking-wide">{text}</h1>
          </a>
        </Link>
      </div>
    );
  }

  async function handleLogin() {
    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const addresses = await provider.send("eth_requestAccounts", []);
    if (addresses) {
      setLoggedIn("1");
      setAddress(ethers.utils.getAddress(addresses[0]));
    }
  }

  return (
    <nav className="bg-black bg-opacity-50 backdrop-blur-xl duration-300">
      <div className="max-w-[1100px] mx-auto font-mono flex flex-row p-4">
        <div className="flex-row flex space-x-4">
          {windowSize.width < 800 ? (
            <>
              <Menu className="w-8 cursor-pointer" />
              <div className="cursor-pointer my-auto mr-5">
                <Link href="/">
                  <a>
                    <KorokSVG />
                  </a>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="cursor-pointer my-auto mr-5">
                <Link href="/">
                  <a>
                    <KorokSVG />
                  </a>
                </Link>
              </div>
              <NavButton text="Bounties" link="/explore" />
              <NavButton text="Governance" link="/governance" />
              <NavButton text="About" link="/about" />
            </>
          )}
        </div>
        <a
          className="ml-auto my-auto border rounded-full p-2 border-gray-800 hover:border-gray-100 duration-300 flex"
          href="https://discord.gg/Zydc7FtCs8"
        >
          <DiscordAlt className="w-6" />
        </a>
        <a
          className="ml-3 my-auto border rounded-full p-2 border-gray-800 hover:border-gray-100 duration-300 flex"
          href="https://github.com/Haruxe/korokdao"
        >
          <Github className="w-6" />
        </a>
        <a
          className="mx-3 my-auto border rounded-full p-2 border-gray-800 hover:border-gray-100 duration-300 flex"
          href="https://twitter.com"
        >
          <Twitter className="w-6" />
        </a>
        {loggedIn == "1" ? (
          <button className="border rounded-full px-4 py-2 text-sm my-auto duration-300 flex flex-row border-gray-800 hover:border-gray-100">
            <div className="p-[1px] bg-black flex rounded-full my-auto">
              {/* <Image
                src={
                  "https://github.com/Haruxe/korokdao/blob/main/profiles/" +
                  address +
                  "/pfp.png?raw=true"
                }
                width="24"
                height="24"
                layout="fixed"
                className="rounded-full"
              /> */}
              <FaceMask className="w-6" />
            </div>
            <h1 className="my-auto ml-2">{address.substr(0, 8)}</h1>
          </button>
        ) : (
          <button
            className="border-gray-800 border rounded-full px-4 py-2 text-sm duration-300 hover:border-gray-100"
            onClick={handleLogin}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
