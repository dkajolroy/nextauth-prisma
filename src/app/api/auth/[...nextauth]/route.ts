import prisma from "@/app/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        name: { label: "Name", type: "text", placeholder: "Enter your name" },
        password: {
          label: "Name",
          type: "text",
          placeholder: "Enter your Password",
        },
      },
      async authorize(credentials, req) {
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
        return user;
      },
    }),

    GoogleProvider({
      //   profile(profile, tokens) {
      //     console.log("Your G Profile: " + profile);
      //     return profile;
      //   },
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  //   pages: { signIn: "/auth", newUser: "/auth", signOut: "/auth" },
  debug: process.env.NODE_ENV !== "production",
});

export { handler as GET, handler as POST };
