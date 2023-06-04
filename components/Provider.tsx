'use client';

import { SessionProvider, SessionProviderProps, useSession } from "next-auth/react";

interface ProviderProps {
  children: React.ReactNode;
  session?: SessionProviderProps['session'];
}

const Provider = ({ children, session }: ProviderProps) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
};

export default Provider;