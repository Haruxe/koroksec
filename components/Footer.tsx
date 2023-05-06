import React from "react";

function Footer() {
  return (
    <nav className="duration-300">
      <div className="max-w-[800px] font-mono flex flex-col space-y-3 py-5 px-3 mx-auto">
        <div className="w-full h-[1px] bg-zinc-500 mx-auto" />
        <div className="mx-auto text-sm">
          <h1>© 2023 by koroksec. All Rights Reserved.</h1>
        </div>
      </div>
    </nav>
  );
}

export default Footer;
