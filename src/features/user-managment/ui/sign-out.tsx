"use client";
import { PowerIcon } from "@heroicons/react/24/outline";
import { signoutAction } from "../actions";

export function SignOutButton() {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await signoutAction();
      }}
    >
      <button
        className="ml-auto flex items-center gap-2 bg-red-800 text-white px-2 py-2 rounded-md font-medium shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150"
        type="submit"
      >
        <PowerIcon className="w-5 h-5" />
        Sign Out
      </button>
    </form>
  );
}
