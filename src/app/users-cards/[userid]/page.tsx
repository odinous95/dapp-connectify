import { UserCard } from "@/features/card/ui";
import { Page } from "@/ui/pages";

export default async function UserPage({
  params,
}: {
  params: Promise<{ userid: string }>;
}) {
  const userid = (await params).userid;

  return (
    <Page title={"User Business Card"}>
      My user: {userid}
      <UserCard />
    </Page>
  );
}
