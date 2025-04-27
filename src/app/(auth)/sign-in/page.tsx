import { LoginForm } from "@/features/auth/ui";
import { Page } from "@/global-ui/pages-layout";

export default function Signin() {
  return (
    <Page title={""}>
      <LoginForm />
    </Page>
  );
}
