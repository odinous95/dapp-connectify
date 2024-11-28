import React from "react";

export function Footer() {
  return (
    <>
      <hr className="border-gray-200" />
      <div className="flex flex-wrap items-center md:justify-between justify-center bg-gray-600 text-white">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm font-semibold py-1 ">
            Copyright © {new Date().getFullYear()} | Connectify
          </div>
        </div>
      </div>
    </>
  );
}
