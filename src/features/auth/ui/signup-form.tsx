"use client";
import { useActionState } from "react";
import { Heading, Input, SubmitButton } from "@/global-ui/components";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { FormRedirect } from ".";
import { signupAction } from "../actions";

export function SignUpForm() {
  const [state, formAction, isPending] = useActionState(signupAction, null);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-900 dark:text-gray-100">
      <div className="bg-white dark:bg-gray-800 text-black dark:text-gray-200 rounded-lg m-auto p-3 w-full max-w-md sm:p-8 md:max-w-lg md:p-8 lg:max-w-xl xl:max-w-2xl shadow-lg">
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
            <strong
              aria-live="polite"
              className="text-red-700 dark:text-red-500 p-5"
            >
              {state?.errors && JSON.stringify(state.errors.email)}
            </strong>

            <Input
              id="name"
              label="Full Name"
              name={"name"}
              type={"text"}
              disabled={false}
            />
            <strong
              aria-live="polite"
              className="text-red-700 dark:text-red-500 p-5"
            >
              {state?.errors && JSON.stringify(state.errors.name)}
            </strong>

            <Input
              id="password"
              label="Password"
              type="password"
              name={"password"}
              disabled={false}
            />
            <strong
              aria-live="polite"
              className="text-red-700 dark:text-red-500 p-5"
            >
              {state?.errors && JSON.stringify(state.errors.password)}
            </strong>

            <SubmitButton
              title={"Sign up"}
              aria-disabled={isPending}
              pending={isPending}
            />

            {state && (
              <div
                className={`mt-4 flex items-center space-x-2 rounded-md p-3 text-sm ${state.success
                  ? "bg-green-50 text-green-600 dark:bg-green-900 dark:text-green-400"
                  : "bg-red-50 text-red-600 dark:bg-red-900 dark:text-red-400"
                  }`}
                aria-live="polite"
                aria-atomic="true"
              >
                <ExclamationCircleIcon
                  className={`h-5 w-5 ${state.success
                    ? "text-green-500 dark:text-green-400"
                    : "text-red-500 dark:text-red-400"
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
        <hr className="border-gray-300 dark:border-gray-700" />
      </div>
    </div>
  );
}
