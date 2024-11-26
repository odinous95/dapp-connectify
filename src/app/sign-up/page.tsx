import { SignUpForm } from "@/features/user-managment/ui";
import { Page } from "@/ui/pages";

export default function Signup() {
  return (
    <Page title={"Sign Up"}>
      <SignUpForm />
      <h2>this is a sign up page</h2>
    </Page>
  );
}
