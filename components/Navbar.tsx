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

  // @ts-ignore
  function NavButton({ text, link }) {
    return (
      <div className="my-auto cursor-pointer px-1 sm:px-2 duration-300 flex hover:text-yellow-300">
        <Link href={link}>
          <a className="my-auto">
            <h1 className="text-[.75rem] sm:text-sm tracking-wide">{text}</h1>
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
    <nav className="duration-300 fixed w-full backdrop-blur-sm">
      <div className="max-w-[800px] mx-auto font-mono flex flex-row duration-300 py-2 sm:py-5 px-3">
        <div className="flex-row flex space-x-4">
          <>
            <div className="cursor-pointer my-auto">
              <Link href="/">
                <a className="my-auto flex animate-pulse">
                  <Image
                    src="/images/korok.png"
                    className="my-auto flex"
                    width={25}
                    height={25}
                    alt="logo"
                  />
                </a>
              </Link>
            </div>
            <NavButton text="About" link="/about" />
            <NavButton text="Expect" link="/whattoexpect" />
            <NavButton text="Reports" link="/reports" />
          </>
        </div>
        <a
          className="ml-auto my-auto rounded-full duration-300 flex hover:text-yellow-300"
          href="https://discord.gg/Zydc7FtCs8"
        >
          <DiscordAlt className="w-6" />
        </a>
        <a
          className="ml-3 my-auto rounded-full duration-300 flex hover:text-yellow-300"
          href="https://github.com/Haruxe/korokdao"
        >
          <Github className="w-6" />
        </a>
        <a
          className="mx-3 my-auto rounded-full duration-300 flex hover:text-yellow-300"
          href="https://twitter.com/korokdao"
        >
          <Twitter className="w-6" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
