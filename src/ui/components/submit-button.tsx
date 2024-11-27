"use client";

import { Loader } from ".";

type Props = {
  title: string;
  pending: boolean;
};
export function SubmitButton({ title, pending }: Props) {
  return (
    <div className="relative">
      <button
        disabled={pending}
        type="submit"
        className={`w-full p-3 text-white rounded-lg transition duration-300 ${
          pending
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-slate-600 hover:bg-slate-500"
        }`}
      >
        {pending ? <Loader /> : title}
      </button>
    </div>
  );
}
