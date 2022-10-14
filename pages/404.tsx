import Link from "next/link";
import React from "react";

function FourOhFour() {
  return (
    <>
      <div className="max-w-[1100px] mx-auto font-mono flex p-4 ">
        <div className="w-1/2 h-[80vh] place-content-center flex flex-col mx-auto">
          <div>
            <h1 className="text-[4rem] my-auto">ERROR. 404</h1>
            <p className="text-[1.5rem] my-10">
              Whoops, That Page Doesn't Exist.
            </p>
            <div>
              <Link href="/">
                <a className="bg-white border text-black px-4 py-2 text-xl w-full">
                  $_ Go Home
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FourOhFour;
