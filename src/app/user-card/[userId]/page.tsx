import { redirect } from 'next/navigation';
import { auth } from '@/auth.config';
import { cardFeature } from "@/features/private-card";
import { platformFeature } from "@/features/platform";
import { authFeature } from "@/features/auth";
import Image from "next/image";
import Link from "next/link";
import { Page } from "@/global-ui/pages-layout";
import { ProfileCardAdmin, ProfileCardUser, QRCodeCard } from "@/features/private-card/ui";
import { AddPlatform, ProfileSocialLink } from "@/features/platform/ui";
import { UserProfile } from "@/features/auth/ui";
import { Logo } from "@/global-ui/components";
import { BiLinkExternal } from "react-icons/bi";

type Params = {
  params: { userId: string };
};

export default async function UserProfilePage({ params }: Params) {
  // ✅ Use SIWE session from your custom auth method
  const session = await auth();

  if (!session || !session.address || !session.user?.id) {
    redirect('/');
  }
  const sessionUserId = session.user.id;
  const { userId } = params;

  const user = await cardFeature.service.getUserProfileById(userId);
  const { userProfile } = user;

  if (!user.success || !userProfile) {
    return (
      <Page title="">
        <section className="flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-3xl font-bold text-red-200">User Not Found</h1>
          <p className="mt-4 text-red-200">We couldn&apos;t find the profile you were looking for.</p>
        </section>
      </Page>
    );
  }

  const platforms = await platformFeature.service.getPlatformsByUserId(userId);
  const loggedUser = await authFeature.service.getLoggedInUser(sessionUserId);


  return (
    <Page title="">
      <section className="flex flex-col items-center justify-center py-10">
        <div className="flex items-center justify-between w-full p-4 bg-gray-800 text-white shadow-md fixed top-0 left-0 z-10">
          <div className="flex items-center">
            <Logo />
            <span className="text-lg font-semibold">onnetify</span>
          </div>
          <div className="ml-auto">
            {loggedUser && <UserProfile loggedUser={loggedUser} />}
          </div>
        </div>

        <div className="mt-4 w-full max-w-3xl">
          <div className="flex flex-row px-4 py-4 text-gray-500 rounded-2xl bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
            <div className="basis-3/4">
              {sessionUserId === userId ? (
                <ProfileCardAdmin userProfile={userProfile} />
              ) : (
                <ProfileCardUser userProfile={userProfile} />
              )}
            </div>
            <div className="basis-1/6">
              <QRCodeCard userId={userId} />
            </div>
          </div>

          <Link href={`mailto:${userProfile?.email}`} target="_blank" rel="noopener noreferrer">
            <div className="mt-3 text-gray-500 rounded-2xl bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
              <div className="px-8 py-8 mt-3 flex items-start text-yellow-700 text-xl hover:text-gray-500">
                <BiLinkExternal size={25} className="mr-4" />
                <span className="text-lg font-semibold">{userProfile?.email}</span>
              </div>
            </div>
          </Link>

          {platforms.map((item) => (
            <ProfileSocialLink key={item.id} platform={item} />
          ))}

          {sessionUserId === userId && <AddPlatform userId={sessionUserId} />}

          <div className="py-10">
            <strong className="text-3xl p-4 underline">Friends</strong>
            <section className="text-gray-500 my-4 py-2 rounded-2xl bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
              <div className="flex overflow-x-auto mb-10 scrollbar-hidden space-x-4 p-4 max-w-3xl">
                {users.map((user) => (
                  <div key={user.id}>
                    <Link
                      href={`/user-card/${user.id}`}
                      className="flex flex-col bg-gray-100 dark:bg-gray-800 dark:text-gray-400 items-center space-y-2 py-2 px-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-200"
                    >
                      <Image
                        src={user.profileImageUrl || "/profile-placeholder.svg"}
                        alt="User Avatar"
                        className="h-10 w-10 rounded-full object-cover"
                        width={40}
                        height={40}
                      />
                    </Link>
                    <span className="text-sm p-2 m-2 text-gray-700 dark:text-gray-300 w-24 truncate text-center">
                      {user.name}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </Page>
  );
}
