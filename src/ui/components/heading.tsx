import React from "react";

type Props = {
  title: string;
};

export function Heading({ title }: Props) {
  return (
    <>
      <h2 className="text-gray-700 dark:text-gray-300">{title}</h2>
    </>
  );
}
