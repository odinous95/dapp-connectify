import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { SOCIAL_LINK } from "../../card-mangament/types";

type Props = {
  sociallink: SOCIAL_LINK;
};

export function ProfileSocialLink({ sociallink }: Props) {
  return (
    <Link href={sociallink.href}>
      <div className="mt-3 text-gray-500 rounded-2xl bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
        <div className="px-8 py-8 mt-3 text-gray-500 rounded-2xl bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
          <div className="flex flex-wrap items-start sm:space-x-6 sm:flex-nowrap text-teal-700 text-xl hover:text-gray-500">
            <BiLinkExternal size={25} className="mr-4" />
            {sociallink.title.toUpperCase()}
          </div>
        </div>
      </div>
    </Link>
  );
}
