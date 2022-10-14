import React from "react";
import { ChevronUp, ChevronDown, Search } from "@styled-icons/boxicons-regular";
import Image from "next/image";

function index() {
  return (
    <>
      <div className="max-w-[1100px] mx-auto font-mono flex p-4 flex-col">
        <div className="place-content-center flex flex-col">
          <div>
            <p className="text-[1.5rem] my-10">~/about</p>
          </div>
          <div>
            <h1 className="font-bold">Introduction</h1>
            <p className="text-sm leading-relaxed mt-5">
              KorokDAO is the most transparent, decentralized, and secure
              platform for white-hats and protocols to grow their reputation
              on-chain. It cuts the middle-man; unlike alternative platforms,
              Korok is the <u>first</u> protocol to allow hackers to{" "}
              <i>directly</i> communicate with protocols using the platform, as
              apposed to using a third-party triaging service that can be slow,
              unresponsive, and unreliable.
            </p>
            <p className="text-sm leading-relaxed mt-5">
              This inherantly means that with less employees to pay, KorokDAO
              can charge much less for the service because the program is
              self-sustaining. Protocols only pay a <s>TBD</s> fee for their
              services, an extremely competetive rate.
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
              KorokDAO gathers no information about you - it doesn't care! All
              information leading back to you is linked to your wallet, so no
              need to provide your email or personal information.
              Psuedo-anonymity is one of the most sacred and prized aspects of
              blockchain technology.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
