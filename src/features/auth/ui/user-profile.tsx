"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  loggedUser: {
    profileImageUrl: string | null;
    email?: string | null;
    id: number;
    name: string;
    phone: string | null;
    joinDate: string | null;
    status: string | null;
    biography: string | null;
  } | null;
};

export function UserProfile({ loggedUser }: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  return (
    <div className="relative">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <span className="bg-green-800 rounded-full">0</span>
          <button onClick={toggleDropdown}>
            <Image
              src={loggedUser?.profileImageUrl || "/profile-placeholder.svg"}
              alt="User Avatar"
              className="h-10 w-10 rounded-full object-cover"
              width={40}
              height={40}
            />
          </button>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-1 text-gray-700 border border-gray-200">
          <Link href={`/user-card/${loggedUser?.id}`}>
            <div className="hover:bg-gray-100 p-2 cursor-pointer flex items-center space-x-2 my-1 border-b border-gray-300">
              <span className="font-semibold text-sm">{loggedUser?.name}</span>
            </div>
          </Link>
          <Link href={`/user-card/${loggedUser?.id}`}>
            <div className="hover:bg-gray-100 p-2 cursor-pointer flex items-center space-x-2  my-1 border-b border-gray-300">
              <span className="text-sm">{loggedUser?.email}</span>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
