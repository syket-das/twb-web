import GithubProvider from 'next-auth/providers/github';
import CredentialProvider from 'next-auth/providers/credentials';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import clientPromise from '@/utils/mongodb';
import dbConnect from '@/utils/mongoose';

import User from '@/models/User';
import { compare } from 'bcryptjs';

export const options = {
  adapter: MongoDBAdapter(clientPromise),

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),

    CredentialProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        dbConnect();

        if (!credentials.username || !credentials.password) {
          return null;
        }

        const user = await User.findOne({ email: credentials.username });

        if (!user) {
          return null;
        }

        const isValid = await compare(credentials.password, user.password);

        if (!isValid) {
          return null;
        }

        return user;
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: 'jwt',
    maxAge: 1 * 24 * 60 * 60,
  },

  pages: {
    signIn: '/',
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        if (user.role) {
          token.role = user.role;
        } else {
          await dbConnect();
          await User.findOneAndUpdate({ _id: user.id }, { role: 'user' });
          token.role = 'user';
        }
      }

      return token;
    },
    async session({ session, token, user }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }

      return session;
    },
  },
  debug: true,
};
