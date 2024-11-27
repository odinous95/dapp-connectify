import { LoginForm } from "@/features/user-managment/ui";
import { Page } from "@/ui/pages";

export default function Signin() {
  return (
    <Page title={"Sign in"}>
      <LoginForm />
    </Page>
  );
}
