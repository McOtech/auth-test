import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

const handler = NextAuth({
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID!,
      clientSecret: process.env.COGNITO_CLIENT_SECRET!,
      issuer: process.env.COGNITO_ISSUER,
    }),
  ],
  secret: "qawsexrtyuihjiokiop",
  //   session: {
  //     strategy: "jwt",
  //   },
  callbacks: {
    async session({ session, user, token }) {
      //   console.log("session::token:::>", token);
      //   console.log("session::session:::>", session);
      //   console.log("session::user:::>", user);

      //   if (session.user) {
      //     session.user = { ...session.user, name: token.username as string };
      //     return session;
      //   }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      //   console.log("jwt::account:::>", account);
      //   console.log("jwt::profile:::>", profile);
      //   console.log("jwt::token:::>", token);
      //   if (profile) {
      //     const _profile: any = profile;
      //     token.username = _profile["cognito:username"];
      //     return token;
      //   }
      return token;
    },
  },
});

export { handler as GET, handler as POST };
