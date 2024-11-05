import { PropsWithChildren } from 'react';
import TanstackQueryProvider from './tanstackQueryProvider/TanstackQueryProvider';
import NextAuthProvider from './nextAuthProvider/nextAuthProvider';

const CompoundProvider = async ({ children }: PropsWithChildren) => {
  return (
    <TanstackQueryProvider>
      <NextAuthProvider>{children}</NextAuthProvider>
    </TanstackQueryProvider>
  );
};

export default CompoundProvider;
