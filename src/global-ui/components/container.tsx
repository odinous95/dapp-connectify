import React from "react";

type Props = {
  children: React.ReactNode;
};

export function Container({ children }: Props) {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-80 md:px-40 sm:px-4 px-3 py-10">
      {children}
    </div>
  );
}
