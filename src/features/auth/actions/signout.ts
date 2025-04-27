"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export async function signoutAction() {
  (await cookies()).set("session", "", { expires: new Date(0) });
  redirect("/sign-in");
}
