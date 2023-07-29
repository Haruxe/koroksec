import React, { useEffect, useRef, useState } from "react";
import { ethers } from "ethers";

function ChecksumTool() {
  const [userInput, setUserInput] = useState("");
  const [statusMessage, setStatusMessage] = useState({
    opacity: 0,
    color: "null",
    message: ".",
  });

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(e.target.value);
    setStatusMessage({ opacity: 0, color: "null", message: "." });
  }

  function handleClic() {
    try {
      setUserInput(ethers.utils.getAddress(userInput));
      setStatusMessage({
        opacity: 100,
        color: "white/80",
        message: "Address has been checksummed",
      });
    } catch {
      setStatusMessage({
        opacity: 100,
        color: "yellow-300",
        message: "Invalid address",
      });
    }
  }

  useEffect(() => {
    setStatusMessage((prevStatusMessage) => ({
      ...prevStatusMessage,
      color: prevStatusMessage.color ?? "null",
    }));
  }, [userInput]);

  return (
    <div className="select-none w-full h-full m-auto font-mono flex flex-col">
      <div className="flex flex-col justify-start gap-0">
        <h1 className="font-bold text-xl py-4">Ethereum Checksum Address</h1>
        <p className="text-sm leading-relaxed text-zinc-400">
          Formats any Ethereum address in its valid checksumed form.
        </p>
      </div>
      <div className="h-full w-full flex flex-col justify-center gap-y-8 items-center content-center">
        <p
          className={`text-sm text-${statusMessage.color} opacity-${statusMessage.opacity}`}
        >
          {statusMessage.message}
        </p>
        <input
          className="p-4 rounded-lg border border-1 border-white/50 w-3/6 bg-transparent"
          value={userInput}
          onChange={handleInput}
        />
        <button
          className="text-sm p-4 rounded-lg border border-1 border-white/50 bg-white/20 hover:bg-white/30 active:bg-white/60 transition ease-in-out duration-300"
          onClick={handleClic}
        >
          Format
        </button>
      </div>
    </div>
  );
}

export default ChecksumTool;
