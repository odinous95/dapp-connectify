import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 px-20 py-14 bg-gray-100 text-gray-600">
        <div className=" text-gray-400">
          <Link href={"/"}>
            Connectify- <br />
          </Link>
        </div>
      </div>
      <hr className="border-gray-200" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm font-semibold py-1 text-gray-400">
            Copyright © {new Date().getFullYear()} | Connectify
          </div>
        </div>
      </div>
    </>
  );
}
