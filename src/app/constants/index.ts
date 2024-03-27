import { AuthOptions } from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

export const authOptions: AuthOptions = {
    providers: [
      CognitoProvider({
        clientId: process.env.COGNITO_CLIENT_ID!,
        clientSecret: process.env.COGNITO_CLIENT_SECRET!,
        issuer: process.env.COGNITO_ISSUER,
      }),
    ],
    secret: process.env.SECRETE,
    //   session: {
    //     strategy: "jwt",
    //   },
    callbacks: {
      async session({ session, user, token }) {
        console.log("session::token:::>", token);
        console.log("session::session:::>", session);
        console.log("session::user:::>", user);
  
        if (session.user) {
          const _token: any = token;
          session.user = {
            ...session.user,
            uid: token.sub!,
            firstName: _token["given_name"],
            lastName: _token["middle_name"],
            accessToken: _token["access_token"],
          };
          return session;
        }
        return session;
      },
      async jwt({ token, user, account, profile, isNewUser }) {
        console.log("jwt::account:::>", account);
        console.log("jwt::profile:::>", profile);
        console.log("jwt::token:::>", token);
  
        if (account) {
          token.access_token = account.access_token;
        }
  
        if (profile) {
          const _profile: any = profile;
          // token.username = _profile["cognito:username"];
          token.given_name = _profile["given_name"];
          token.middle_name = _profile["middle_name"];
          return token;
        }
        return token;
      },
    },
  }