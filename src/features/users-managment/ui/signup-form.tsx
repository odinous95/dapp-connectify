"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useActionState } from "react";
import { signupAction } from "../actions";
import { SignUpFieldValues, signUpSchema } from "@/zod/zod-validation";
import { Heading, Input, SubmitButton } from "@/ui/components";

export function SignUpForm() {
  const [state, formAction] = useActionState(signupAction, {
    success: false,
    message: "",
    errors: {},
  });
  const { register } = useForm<SignUpFieldValues>({
    resolver: zodResolver(signUpSchema),
  });
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-gray-100 text-black rounded m-auto p-3 w-full max-w-md sm:p-8  md:max-w-lg  md:p-8 lg:max-w-xl xl:max-w-2xl">
        <div className="flex flex-col gap-2">
          <Heading title="Saltis!" subtitle="Create an Account!" center />
          <form action={formAction}>
            <Input
              id="email"
              label="Email Address"
              register={register("email")}
            />
            <span aria-live="polite" className="text-red-700 p-5">
              {state?.errors && JSON.stringify(state.errors.email)}
            </span>

            <Input id="name" label="Full Name" register={register("name")} />
            <span aria-live="polite" className="text-red-700 p-5">
              {state?.errors && JSON.stringify(state.errors.name)}
            </span>

            <Input
              id="password"
              label="Password"
              register={register("password")}
              type="password"
            />
            <span aria-live="polite" className="text-red-700 p-5">
              {state?.errors && JSON.stringify(state.errors.password)}
            </span>

            <SubmitButton />
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
