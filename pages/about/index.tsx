import React from "react";
import { ChevronUp, ChevronDown, Search } from "@styled-icons/boxicons-regular";
import Image from "next/image";

function Home() {
  return (
    <>
      <div className="max-w-[800px] min-h-[88vh] mx-auto font-mono flex p-4 flex-col">
        <div className="place-content-center flex flex-col">
          <div>
            <p className="text-lg mb-10">~/pages/about</p>
          </div>
          <div className="">
            <h1 className="font-bold">Introduction</h1>
            <p className="sm:text-md text-sm leading-relaxed mt-5 text-zinc-300">
              Koroksec is a team of highly skilled professionals focused on
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
            <p className="sm:text-md text-sm leading-relaxed mt-5 text-zinc-300">
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
              him an invaluable member of the Koroksec team.
            </p>
            <p className="sm:text-md text-sm leading-relaxed mt-5 text-zinc-300">
              -{" "}
              <a
                href="https://twitter.com/erc1337_Coffee"
                className="text-yellow-300 font-bold"
              >
                @erc1337_coffee
              </a>{" "}
              is a highly skilled security expert who, among many other things,
              discovered a significant signature vulnerability in
              OpenZeppelin&apos;s core contracts, which put millions at risk.
              With an extensive background in web2 auditing and bug hunting
              experience, he brings valuable expertise to the Koroksec team. In
              addition to his work in security, @erc1337_coffee has also created
              numerous{" "}
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
            <p className="sm:text-md text-sm leading-relaxed mt-5 text-zinc-300">
              The Koroksec team aims to streamline the process of security
              audits, bug hunting, and security remediation by maintaining open
              communication channels with the team and ensuring quick turnaround
              times. We believe in transparency and collaboration to provide the
              best possible solutions for our clients.
            </p>
            <p className="sm:text-md text-sm leading-relaxed mt-5 text-zinc-300">
              When hiring Koroksec, protocols can expect top-notch services that
              cater to their specific needs. Our process includes:
            </p>
            <ul className="sm:text-md text-sm list-inside leading-relaxed mt-5 space-y-6 text-zinc-300">
              <li>
                - A <b>thorough and comprehensive security audit</b> to identify
                potential vulnerabilities and assess the overall security of
                your protocol.
              </li>
              <li>
                - <b>Open and transparent communication</b> throughout the
                process, keeping you informed and engaged every step of the way.
              </li>
              <li>
                - <b>Tailored security remediation solutions</b> to address any
                identified vulnerabilities or weaknesses, ensuring the long-term
                safety and success of your protocol.
              </li>
              <li>
                - <b>Ongoing support and collaboration</b> even after the
                completion of our services, to guarantee the continued security
                and growth of your project.
              </li>
            </ul>
            <p className="leading-relaxed mt-5 text-sm sm:text-md text-zinc-300">
              With Koroksec, you can trust that your protocol is in good hands,
              and we will work tirelessly to ensure its protection and success.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
