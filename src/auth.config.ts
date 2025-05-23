// app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { SiweMessage } from "siwe";
import { cookies } from "next/headers";
// Extend the Session type to include 'address'
declare module "next-auth" {
  interface Session {
    address?: string;
  }
}
export const authConfig: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: "Ethereum",
      credentials: {
        message: { label: "Message", type: "text" },
        signature: { label: "Signature", type: "text" },
      },
      async authorize(credentials) {
        try {
          const message =
            typeof credentials?.message === "string" ? credentials.message : "";
          const siwe = new SiweMessage(JSON.parse(message));
          const result = await siwe.verify({
            signature:
              typeof credentials?.signature === "string"
                ? credentials.signature
                : "",
            nonce: (await cookies()).get("siwe-nonce")?.value,
          });

          if (!result.success) {
            throw new Error("SIWE signature verification failed.");
          }

          return {
            id: siwe.address,
            address: siwe.address,
          };
        } catch (e) {
          console.error("SIWE validation error:", e);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      session.address = token.sub;
      return session;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
