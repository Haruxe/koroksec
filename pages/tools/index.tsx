import React, { useEffect, useRef, useState } from "react";
import ChecksumTool from "./Checksum";
import WalletsTool from "./Wallets";
import DummyTool from "./Dummy";

function Home() {
  const [activeTool, setActiveTool] = useState<string | undefined>();

  const buttonStyle =
    "select-none aspect-[16/4] px-4 rounded-r-sm border border-l-0 border-1 border-l-8 border-l-white/0 border-r-white hover:bg-white/40 hover:border-white/30 hover:border-l-white/60 transition ease-in-out duration-700 active:translate-x-1 active:duration-100";
  const tools = ["toCheckSumAddress()", "PK_to_wallets()", "Test 3", "Test 4"];

  function handleMenu(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (e.target instanceof HTMLButtonElement) {
      setActiveTool(tools[parseInt(e.target.value)]);
    }
  }

  useEffect(() => {}, [activeTool]);
  return (
    <>
      <div className="w-5/6 min-h-[88vh] mx-auto font-mono flex p-4 flex-row">
        <div className="grid grid-cols-1 content-center items-center justify-center gap-10 p-16">
          {tools.map((tool, index) => {
            return (
              <button
                key={index}
                value={index}
                className={buttonStyle}
                onClick={handleMenu}
              >
                -{` ${tool}`}
              </button>
            );
          })}
        </div>
        <div className="relative flex-1 place-content-center flex flex-col">
          <div className="absolute top-0">
            <p className="text-lg mb-10">
              ~/pages/tools/{activeTool != null ? activeTool : " "}
            </p>
          </div>
          <div className="w-full h-5/6">
            {activeTool === tools[0] ? (
              <ChecksumTool />
            ) : activeTool === tools[1] ? (
              <WalletsTool />
            ) : activeTool === tools[2] ? (
              <DummyTool />
            ) : activeTool === tools[3] ? (
              <DummyTool />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
