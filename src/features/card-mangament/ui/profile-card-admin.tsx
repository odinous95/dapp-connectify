import { ImageInput } from "@/features/user-managment/ui";
import Image from "next/image";
import { PROFILE } from "../types";

type Props = {
  userProfile: PROFILE;
};

export function ProfileCardAdmin({ userProfile }: Props) {
  return (
    <div className="relative flex-shrink-0 w-24 h-24 ">
      {userProfile && <ImageInput profileImg={userProfile.profileImageUrl} />}
    </div>
  );
}
