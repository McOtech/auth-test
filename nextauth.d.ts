import { AdapterUser } from "next-auth/adapters";

declare module "next-auth" {
    interface User extends  AdapterUser{
      uid: string;
      firstName: string;
      lastName: string;
      accessToken: string;
    }
  
    interface Session extends DefaultSession {
      user?: User;
    }
  }