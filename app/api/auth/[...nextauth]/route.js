import NextAuth from 'next-auth';
import { options } from './oprions';

const handler = NextAuth(options);

export { handler as GET, handler as POST };
