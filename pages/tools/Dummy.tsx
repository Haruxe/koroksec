import React, { useEffect, useRef, useState } from "react";

function DummyTool() {
  const [xxx, setXXX] = useState();

  useEffect(() => {
  }, []);

  return (
    <div className="w-full h-full m-auto font-mono flex flex-col">
      <h1 className="font-bold text-xl py-4">Dummy tool</h1>
      <p className="sm:text-md text-sm leading-relaxed mt-5 text-zinc-300">
        Dummy tool
      </p>
    </div>
  );
}

export default DummyTool;
