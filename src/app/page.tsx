import { Page } from "@/ui/pages-layout";

const data = { total: 10, sick: 5 };
export default function Home() {
  return (
    <Page title={"Home"}>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h2>This is the home page</h2>
    </Page>
  );
}
