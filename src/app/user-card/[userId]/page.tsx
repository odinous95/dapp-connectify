import { cardFeature } from "@/features/card";
import { ProfileCard } from "@/features/card/ui";

export default async function Page({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const userId = (await params).userId;
  const [user] = await cardFeature.service.getUserById(userId);
  if (!user) {
    return (
      <div>
        <h1>User does not exist</h1>
      </div>
    );
  }
  return (
    <>
      <ProfileCard user={user} />
    </>
  );
}
