"use client";
import { useRouter } from "next/navigation";
import { useActionState } from "react";
import { signupAction } from "../actions";
import { Heading, Input, SubmitButton } from "@/ui/components";

export function SignUpForm() {
  const [state, formAction, isPending] = useActionState(signupAction, null);
  const router = useRouter();
  console.log(state);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-gray-100 text-black rounded m-auto p-3 w-full max-w-md sm:p-8  md:max-w-lg  md:p-8 lg:max-w-xl xl:max-w-2xl">
        <div className="flex flex-col gap-2">
          <Heading title="Connectify!" />
          <form action={formAction}>
            <Input
              id="email"
              label="Email Address"
              name={"email"}
              type={"text"}
              disabled={false}
            />
            <span aria-live="polite" className="text-red-700 p-5">
              {state?.errors && JSON.stringify(state.errors.email)}
            </span>
            <Input
              id="name"
              label="Full Name"
              name={"name"}
              type={"text"}
              disabled={false}
            />
            <span aria-live="polite" className="text-red-700 p-5">
              {state?.errors && JSON.stringify(state.errors.name)}
            </span>
            <Input
              id="password"
              label="Password"
              type="password"
              name={"password"}
              disabled={false}
            />
            <span aria-live="polite" className="text-red-700 p-5">
              {state?.errors && JSON.stringify(state.errors.password)}
            </span>
            <SubmitButton title={"Sign up"} aria-disabled={isPending} />
          </form>
        </div>
        <div className="flex flex-col py-10">
          <hr />
          <div className="text-neutral-500 text-center font-light">
            <div>
              Already have an account?
              <span
                onClick={() => router.push("/sign-in")}
                className="text-neutral-800 cursor-pointer hover:underline"
              >
                Log in
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
