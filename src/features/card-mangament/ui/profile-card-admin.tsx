import { ImageInput } from "@/features/user-managment/ui";
import { PROFILE } from "../types";
import { ProfileBio } from "./profile-bio";

type Props = {
  userProfile: PROFILE;
};

export function ProfileCardAdmin({ userProfile }: Props) {
  console.log(userProfile);
  return (
    <div className="flex flex-wrap items-start sm:space-x-8 sm:flex-nowrap">
      <div className="relative flex-shrink-0 w-24 h-24 ">
        {userProfile.profileImageUrl && (
          <ImageInput
            profileImg={userProfile.profileImageUrl}
            userId={userProfile.id}
          />
        )}
      </div>
      <ProfileBio biography={userProfile.biography} name={userProfile.name} />
    </div>
  );
}
