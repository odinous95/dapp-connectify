"use client";
import { useRouter } from "next/navigation";
import { useActionState } from "react";
import { signupAction } from "../actions";
import { Heading, Input, SubmitButton } from "@/ui/components";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { FormRedirect } from ".";

export function SignUpForm() {
  const [state, formAction, isPending] = useActionState(signupAction, null);
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
            <strong aria-live="polite" className="text-red-700 p-5">
              {state?.errors && JSON.stringify(state.errors.email)}
            </strong>
            <Input
              id="name"
              label="Full Name"
              name={"name"}
              type={"text"}
              disabled={false}
            />
            <strong aria-live="polite" className="text-red-700 p-5">
              {state?.errors && JSON.stringify(state.errors.name)}
            </strong>
            <Input
              id="password"
              label="Password"
              type="password"
              name={"password"}
              disabled={false}
            />
            <strong aria-live="polite" className="text-red-700 p-5">
              {state?.errors && JSON.stringify(state.errors.password)}
            </strong>
            <SubmitButton
              title={"Sign up"}
              aria-disabled={isPending}
              pending={isPending}
            />
            {state && (
              <div
                className={`mt-4 flex items-center space-x-2 rounded-md p-3 text-sm ${
                  state.success
                    ? "bg-green-50 text-green-600"
                    : "bg-red-50 text-red-600"
                }`}
                aria-live="polite"
                aria-atomic="true"
              >
                <ExclamationCircleIcon
                  className={`h-5 w-5 ${
                    state.success ? "text-green-500" : "text-red-500"
                  }`}
                />
                <strong>{state.message}</strong>
              </div>
            )}
          </form>
        </div>
        <FormRedirect
          message={"Already have an account?"}
          linkText={"Sign in"}
          redirectPath={"/sign-in"}
        />
        <hr />
      </div>
    </div>
  );
}
