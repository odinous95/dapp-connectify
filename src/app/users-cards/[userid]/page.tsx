import { Page } from "@/ui/pages";

export default async function UserCard({
  params,
}: {
  params: Promise<{ userid: string }>;
}) {
  const userid = (await params).userid;
  // const userData =
  return <Page title={"User Business Card"}>My user: {userid}</Page>;
}
