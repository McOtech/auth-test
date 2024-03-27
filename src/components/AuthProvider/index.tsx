'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

type IAuthProvider = { children: ReactNode };

const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  //   const session = useSession();
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
