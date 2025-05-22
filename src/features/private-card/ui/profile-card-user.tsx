import Image from "next/image";
import { PROFILE } from "../types";
import DefaultImage from "@/public/profile-placeholder.svg";
import { ProfileBio } from "./profile-bio";

type Props = {
  userProfile: PROFILE;
};
export function ProfileCardUser({ userProfile }: Props) {
  return (
    <div className="flex flex-wrap items-start sm:space-x-8 sm:flex-nowrap">
      <div className="relative flex-shrink-0 w-24 h-24 ">
        {userProfile.profileImageUrl ? (
          <Image
            src={userProfile.profileImageUrl}
            className="h-20 w-20 rounded-full object-cover"
            alt={"Profile name"}
            width={80}
            height={80}
          />
        ) : (
          <Image
            src={DefaultImage}
            alt="Avatar"
            className="h-20 w-20 rounded-full object-cover"
            width={80}
            height={80}
          />
        )}
      </div>
      <ProfileBio biography={userProfile.biography} name={userProfile.name} />
    </div>
  );
}
