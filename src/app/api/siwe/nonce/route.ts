// app/api/siwe/nonce/route.ts
import { NextResponse } from "next/server";
import { generateNonce } from "siwe";
import { cookies } from "next/headers";

export async function GET() {
  const nonce = generateNonce();
  (await cookies()).set("siwe-nonce", nonce, { httpOnly: true });
  return NextResponse.json({ nonce });
}
