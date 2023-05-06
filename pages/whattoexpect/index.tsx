import React from "react";
import { ChevronUp, ChevronDown, Search } from "@styled-icons/boxicons-regular";
import Image from "next/image";

function Home() {
  return (
    <>
      <div className="max-w-[800px] min-h-[88vh] mx-auto font-mono flex p-4 flex-col">
        <div className="place-content-center flex flex-col">
          <div>
            <p className="text-lg">~/pages/whattoexpect</p>
          </div>
          <div>
            <h1 className="mt-10 font-bold">What To Expect</h1>
            <p className="sm:text-md text-sm leading-relaxed mt-5 text-zinc-300">
              When hiring Korok Security Collective, protocols can expect
              top-notch services that cater to their specific needs. Our process
              includes:
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
              With Korok Security Collective, you can trust that your protocol
              is in good hands, and we will work tirelessly to ensure its
              protection and success.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
