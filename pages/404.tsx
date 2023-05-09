import Link from "next/link";
import React from "react";

function FourOhFour() {
  return (
    <>
      <div className="max-w-[1100px] mx-auto font-mono flex p-4 ">
        <div className="w-1/2 h-[80vh] place-content-center flex flex-col mx-auto">
          <div>
            <h1 className="text-2xl my-auto">ERROR. 404</h1>
            <p className="text-md mb-6 mt-2">
              Whoops, That Page Doesn&apos;t Exist.
            </p>
            <div>
              <Link href="/">
                <a className="bg-yellow-300 border text-black text-sm px-4 py-2 w-full">
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
