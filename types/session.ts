import { DefaultSession } from "next-auth"
import 'next-auth'


declare module 'next-auth' {
    export interface User {
      uid: string
      username:string
    }

    export interface Session {
        user: User;
      }
  }



