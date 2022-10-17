import Link from "next/link";
import React, { useEffect, useState } from "react";
import { DiscordAlt } from "@styled-icons/boxicons-logos/DiscordAlt";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Twitter } from "@styled-icons/evaicons-solid/Twitter";
import { Menu } from "@styled-icons/boxicons-regular/Menu";
import Image from "next/image";

function Navbar() {
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
  function KorokSVG() {
    return (
      <svg width="50" height="26" viewBox="0 0 100 52.17391304347826">
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
      <div className="my-auto cursor-pointer">
        <Link href={link}>
          <a>
            <h1 className="text-sm">{text}</h1>
          </a>
        </Link>
      </div>
    );
  }

  return (
    <nav className="bg-black bg-opacity-50 backdrop-blur-xl duration-200">
      <div className="max-w-[1100px] mx-auto font-mono flex flex-row p-4">
        <div className="flex-row flex space-x-10">
          {windowSize.width < 800 ? (
            <>
              <Menu className="w-8 cursor-pointer" />
              <div className="w-[1px] bg-white h-5 my-auto" />
              <div className="cursor-pointer">
                <Link href="/">
                  <a>
                    <KorokSVG />
                  </a>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="cursor-pointer">
                <Link href="/">
                  <a>
                    <KorokSVG />
                  </a>
                </Link>
              </div>
              <div className="w-[1px] bg-white h-5 my-auto" />
              <NavButton text="Bounties" link="/bounties" />
              <NavButton text="Get Listed" link="/getlisted" />
              <NavButton text="Governance" link="/governance" />
              <NavButton text="About" link="/about" />
            </>
          )}
        </div>
        <a className="w-6 ml-auto my-auto" href="https://discord.gg/Zydc7FtCs8">
          <DiscordAlt />
        </a>
        <a
          className="w-6 ml-3 my-auto"
          href="https://github.com/Haruxe/korokdao"
        >
          <Github />
        </a>
        <a className="w-6 ml-3 my-auto" href="https://twitter.com">
          <Twitter />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
