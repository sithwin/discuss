import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/db";

const GIT_HUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GIT_HUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

if (!GIT_HUB_CLIENT_ID || !GIT_HUB_CLIENT_SECRET) {
  throw new Error("Missing github client id or secret");
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    GitHub({
      clientId: GIT_HUB_CLIENT_ID,
      clientSecret: GIT_HUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    // Usually not needed
    async session({ session, user }: any) {
      console.log("callbacks", session, user);

      if (session && user) {
        session.user.id = user.id;
      }

      return session;
    },
  },
});
