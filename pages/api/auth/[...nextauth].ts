import NextAuth from "next-auth"
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google"
import { Session } from "next-auth"
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
    session: async ( { session, token, user}:any): Promise<Session> => {
      session.user.username = session.user.name
      .split(' ')
      .join('')
      .toLocaleLowerCase();

      if (session?.user) {
        session.user.uid = token.sub;
      }
      return session
    }
  }
}
export default NextAuth(authOptions)