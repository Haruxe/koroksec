import React from "react";
import { ChevronUp, ChevronDown, Search } from "@styled-icons/boxicons-regular";
import Image from "next/image";

function Home() {
  return (
    <>
      <div className="max-w-[1100px] mx-auto font-mono flex p-4 flex-col">
        <div className="place-content-center flex flex-col">
          <div>
            <p className="text-lg mb-10">~/pages/about</p>
          </div>
          <div>
            <h1 className="font-bold">Introduction</h1>
            <p className="text-sm leading-relaxed mt-5">
              KorokDAO is the most transparent, decentralized, and secure web3
              bug bounty platform for white-hats and protocols to grow their
              reputation. KorokDAO cuts the middle-man; unlike alternative
              platforms, Korok is the <u>first</u> P2P bug bounty protocol that
              allows hackers to <i>directly</i> communicate with protected
              services using the platform, as apposed to using a third-party
              triaging service that can be slow, unresponsive, and unreliable.
            </p>
            <p className="text-sm leading-relaxed mt-5">
              This inherantly means that with no employees to pay, KorokDAO can
              charge much less for the service because it is self-sustaining,
              protocols only pay a 4.20% fee for their services.
            </p>
            <h1 className="mt-10 font-bold">Getting Protected</h1>
            <p className="text-sm leading-relaxed mt-5">
              After proving ownership of the given contracts you wish to be
              listed, as well as the payout range, the program will immediately
              be available on the bounty page. Rather than screening each
              program to ensure validity, your project will gain reputation over
              time which will make it both more visible and more appealing to
              white-hats.
            </p>
            <p className="text-sm leading-relaxed mt-5">
              Lowering the barrier of entry is also a benefit for the
              white-hats. Beginners can grow their repetoir of found
              vulnerabilities by finding low-hanging fruit on smaller projects
              without worrying about payouts - the project wins as well because
              they are protected!
            </p>
            <h1 className="mt-10 font-bold">Privacy</h1>
            <p className="text-sm leading-relaxed mt-5">
              KorokDAO gathers no information about you - it doesn&apos;t care!
              All information leading back to you is linked to your wallet, so
              no need to provide your email or personal information. Anonymity
              is one of the most sacred and prized aspects of blockchain
              technology.
            </p>
            <h1 className="mt-10 font-bold">Contribute/Governance</h1>
            <p className="text-sm leading-relaxed mt-5">
              KorokDAO uses Snapshot, a decentralized voting protocol that
              utilizes IPFS and wallet signatures to deliver accurate voting and
              proposals - gas free. The front-end is also open-sourced on
              GitHub.
            </p>
            <h1 className="mt-10 font-bold">Help</h1>
            <p className="text-sm leading-relaxed mt-5">
              Got more questions? Join the{" "}
              <a
                className="w-6 ml-auto my-auto text-[#80c027]"
                href="https://discord.gg/Zydc7FtCs8"
              >
                KorokDAO Discord
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
