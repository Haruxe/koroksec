import React from "react";
import { ChevronUp, ChevronDown, Search } from "@styled-icons/boxicons-regular";
import Image from "next/image";

function Home() {
  return (
    <>
      <div className="max-w-[900px] mx-auto font-mono flex p-4 flex-col">
        <div className="place-content-center flex flex-col">
          <div>
            <p className="text-lg mb-10">~/pages/about</p>
          </div>
          <div className="">
            <h1 className="font-bold">Introduction</h1>
            <p className="sm:text-md leading-relaxed mt-5">
              Korok is a team of highly skilled professionals focused on
              providing quick turnaround times and excellent communication for
              security audits, bug hunting, and security remediation. Led by{" "}
              <a
                href="https://twitter.com/haruxeETH"
                className="text-yellow-300 font-bold"
              >
                @haruxeETH
              </a>{" "}
              and{" "}
              <a
                href="https://twitter.com/erc1337_Coffee"
                className="text-yellow-300 font-bold"
              >
                @erc1337_coffee
              </a>
              , who have an impressive background in identifying significant
              vulnerabilities in major protocols like OpenZeppelin, BAOFinance,
              and more.
            </p>
            <h1 className="mt-10 font-bold">Our Team</h1>
            <p className="sm:text-md leading-relaxed mt-5">
              -{" "}
              <a
                href="https://twitter.com/haruxeETH"
                className="text-yellow-300 font-bold"
              >
                @haruxeETH
              </a>{" "}
              is a talented security researcher and DeFi developer with a
              background in game development and web development. As a trusted
              expert in the industry, he has partnered with Immunefi to publish
              articles and also self-published articles on his own at his{" "}
              <a
                href="https://mirror.xyz/haruxe.ETH"
                className="text-yellow-300 font-bold"
              >
                mirror.xyz
              </a>
              . His deep understanding of security vulnerabilities and extensive
              experience in developing secure decentralized applications make
              him an invaluable member of the Korok collective.
            </p>
            <p className="sm:text-md leading-relaxed mt-5">
              -{" "}
              <a
                href="https://twitter.com/erc1337_Coffee"
                className="text-yellow-300 font-bold"
              >
                @erc1337_coffee
              </a>{" "}
              is a highly skilled security expert who among many others
              discovered a significant signature vulnerability in
              OpenZeppelin&apos;s core contracts, which put millions at risk.
              With an extensive background in web2 audit and exploit experience,
              he brings valuable expertise to the Korok Security Collective
              team. In addition to his work in security, @erc1337_coffee has
              also created numerous{" "}
              <a href="https://erc1337.tools/" className="text-yellow-300">
                tooling
              </a>{" "}
              for the{" "}
              <a
                href="https://twitter.com/kaijukingz"
                className="text-yellow-300"
              >
                KaijuKingz
              </a>{" "}
              community, showcasing his diverse skill set and dedication to
              providing comprehensive security solutions.
            </p>
            <h1 className="mt-10 font-bold">Our Approach</h1>
            <p className="sm:text-md leading-relaxed mt-5">
              The Korok team aims to streamline the process of security audits,
              bug hunting, and security remediation by maintaining open
              communication channels with the team and ensuring quick turnaround
              times. We believe in transparency and collaboration to provide the
              best possible solutions for our clients.
            </p>
            <h1 className="mt-10 font-bold">Get in Touch</h1>
            <p className="sm:text-md leading-relaxed mt-5">
              If you need our expertise or have any questions, feel free to
              reach out to us on our{" "}
              <a
                className="w-6 ml-auto my-auto text-yellow-300"
                href="https://discord.gg/Zydc7FtCs8"
              >
                Discord
              </a>
              , email us at{" "}
              <span className="text-yellow-300">korokdao@proton.me</span>, or DM
              us on{" "}
              <a
                href="https://twitter.com/korokdao"
                className="text-yellow-300"
              >
                Twitter
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
