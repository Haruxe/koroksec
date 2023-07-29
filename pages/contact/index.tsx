import React, { useEffect, useRef, useState } from "react";
import { ChevronUp, ChevronDown, Search } from "@styled-icons/boxicons-regular";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import placeHolder from "/public/images/placeholder.png";
import { X } from "styled-icons/bootstrap";

function Home() {
  const [selectedImage, setSelectedImage] = useState();
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [name, setName] = useState("");
  const sources = useRef([""]);
  const [sourceLength, setSourceLength] = useState(1);
  const [lowPayout, setLowPayout] = useState("0");
  const [mediumPayout, setMediumPayout] = useState("0");
  const [highPayout, setHighPayout] = useState("0");
  const [criticalPayout, setCriticalPayout] = useState("0");
  // @ts-ignore
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      let file = event.target.files[0];
      reader.onloadend = () => {
        // @ts-ignore
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="max-w-[800px]  min-h-[88vh] mx-auto font-mono flex p-4 flex-col">
        <div className="w-1/2 place-content-center flex flex-col">
          <div>
            <p className="text-lg mb-10">~/pages/contact</p>
          </div>
        </div>
        <h1 className="font-bold">Contact Us</h1>
        <p className="sm:text-lg text-md leading-relaxed mt-5 text-zinc-300">
          Scheduling a private audit with Koroksec is a seamless process.
          Here&apos;s what you can expect:
        </p>
        <ul className="sm:text-lg text-md list-inside leading-relaxed mt-5 space-y-6 text-zinc-300">
          <li>
            1. <b>Initial Consultation:</b> Reach out to us via Discord, email,
            or Twitter to discuss your security needs.
          </li>
          <li>
            2. <b>Custom Quote:</b> We will assess your project&apos;s specifics
            and provide a personalized quote based on the scope of the audit
            required.
          </li>
          <li>
            3. <b>Scheduling:</b> Upon agreement, we will schedule your audit at
            the earliest convenient date.
          </li>
          <li>
            4. <b>Follow-up:</b> After the audit, we offer debriefing sessions
            to discuss our findings and recommended actions.
          </li>
        </ul>
        <p className="sm:text-lg text-md leading-relaxed mt-5 text-zinc-300">
          Ready to ensure the security of your protocol with Koroksec? Get in
          touch with us.
        </p>
        <p className="sm:text-lg text-md leading-relaxed mt-5 text-zinc-300">
          Join our{" "}
          <a className="text-yellow-300" href="https://discord.gg/Zydc7FtCs8">
            Discord
          </a>
          , email us at{" "}
          <span className="text-yellow-300">koroksec@proton.me</span>, or send
          us a direct message on{" "}
          <a href="https://twitter.com/koroksec" className="text-yellow-300">
            Twitter
          </a>
          . We&apos;re looking forward to hearing from you!
        </p>
      </div>
    </>
  );
}
export default Home;
