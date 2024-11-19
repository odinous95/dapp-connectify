import SignUpForm from "@/features/user/ui/signup-form";
import { SignUpPage } from "@/ui/pages-layout";
export default function Signup() {
  return (
    <SignUpPage>
      <SignUpForm />
      <h2>this is a sign up page</h2>
    </SignUpPage>
  );
}
