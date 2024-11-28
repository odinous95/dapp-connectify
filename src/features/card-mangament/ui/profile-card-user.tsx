import Image from "next/image";
import { PROFILE } from "../types";
import DefaultImage from "@/public/profile-placeholder.svg";

type Props = {
  userProfile: PROFILE;
};
export function ProfileCardUser({ userProfile }: Props) {
  return (
    <div className="relative flex-shrink-0 w-24 h-24 ">
      {userProfile.profileImageUrl && (
        <Image
          src={userProfile.profileImageUrl}
          // loader={}
          // blurDataURL={}
          objectFit="cover"
          alt={"Profile name"}
          // placeholder="blur"
          layout="fill"
          className="rounded-full"
        />
      )}
      <Image
        src={DefaultImage}
        alt="Avatar"
        className="h-20 w-20 rounded-full object-cover"
        width={80}
        height={80}
      />
    </div>
  );
}
