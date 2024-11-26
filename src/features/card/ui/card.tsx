import Image from "next/image";
import { ProfileSociallink, ProfileImage, ProfileBio } from ".";

export async function ProfileCard() {
  return (
    <div className="px-8 py-8 mt-3 text-gray-500 rounded-2xl bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
      <div className="flex flex-wrap items-start sm:space-x-6 sm:flex-nowrap">
        <ProfileImage />
        <ProfileBio
          profile={{
            name: "odin",
            bio: "heelo this is odin",
          }}
        />
      </div>
      <ProfileSociallink
        sociallink={{
          title: "Linkedin",
          href: "/",
        }}
      />
    </div>
  );
}
