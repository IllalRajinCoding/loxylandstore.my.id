// import NextAuth from "next-auth";
// import Credentials from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";

// import { prisma } from "@/lib/prisma";

// export const { auth, handlers, signIn, signOut } = NextAuth({
//   session: { strategy: "jwt" },
//   pages: {
//     signIn: "/login",
//   },
//   providers: [
//     Credentials({
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials.password) {
//           return null;
//         }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email.toLowerCase() },
        });

        if (!user) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);

        if (!isPasswordValid) {
          return null;
        }

//         return {
//           id: user.id,
//           email: user.email,
//           name: user.name ?? undefined,
//         };
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (session.user && token?.id) {
//         session.user.id = token.id as string;
//       }
//       return session;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// });

