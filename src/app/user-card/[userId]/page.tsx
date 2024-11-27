import { cardFeature } from "@/features/card-mangament";
import { ProfileCard } from "@/features/card-mangament/ui";
import { Page } from "@/ui/pages";

export default async function UserProfilePage({
  params,
}: {
  params: Promise<{ userId: number }>;
}) {
  const userId = (await params).userId;
  const response = await cardFeature.service.getUserProfileById(userId);
  if (!response.success || !response.userProfile) {
    return (
      <div>
        <h1>User does not exist </h1>
      </div>
    );
  }
  return (
    <>
      <Page title={"User Profile"}>
        <ProfileCard userProfile={response.userProfile} />
      </Page>
    </>
  );
}
