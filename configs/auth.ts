import type { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "@/app/api/api";

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        // try {
        //   const res = await login({
        //     email: credentials.email,
        //     password: credentials.password,
        //   });
        //   if (res !== false) {
        //     const { password, ...userWithoutPass } = res.user;
        //
        //     return userWithoutPass as User;
        //   }
        // } catch (e: any) {
        //   console.log(e.status);
        // }

        return null;
      },
    }),
  ],
};
