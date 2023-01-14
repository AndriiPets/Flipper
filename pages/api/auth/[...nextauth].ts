import NextAuth from "next-auth"
import { OAuthConfig } from "next-auth/providers";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google"
import { Session } from "../../../types/session"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: <string>process.env.GOOGLE_ID,
      clientSecret: <string>process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/signin"
  },

  callbacks: {
    async session( { session, token, user}:any) {
      session.user.username = session.user.name
      .split(' ')
      .join('')
      .toLocaleLowerCase();

      session.user.uid = token.sub;
      return session
    }
  }
}
export default NextAuth(authOptions)