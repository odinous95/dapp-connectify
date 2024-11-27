import {
  AddPlatform,
  ProfileSocialLink,
} from "@/features/platform-mangament/ui";
import { ProfileImage, ProfileBio } from ".";
import { PROFILE } from "../types";

type Props = {
  userProfile: PROFILE;
};

export async function ProfileCard({ userProfile }: Props) {
  return (
    <>
      <div className="px-8 py-8 text-gray-500 rounded-2xl bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
        <div className="flex flex-wrap items-start sm:space-x-8 sm:flex-nowrap">
          <ProfileImage />
          <ProfileBio
            biography={userProfile?.biography}
            name={userProfile.name}
          />
        </div>
      </div>
      <AddPlatform />
      {[
        { title: "LinkedIn", href: "https://linkedin.com" },
        { title: "GitHub", href: "https://github.com" },
        { title: "Twitter", href: "https://twitter.com" },
        { title: "Facebook", href: "https://facebook.com" },
      ].map((sociallink, index) => (
        <ProfileSocialLink key={index} sociallink={sociallink} />
      ))}
    </>
  );
}
