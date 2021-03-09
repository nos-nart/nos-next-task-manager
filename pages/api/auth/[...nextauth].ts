import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { InitOptions } from 'next-auth';
import { verify } from 'argon2';
import Providers from 'next-auth/providers';
import { User } from '@/utils/db';
import { serverRuntimeConfig } from '../../../next.config';
import { SessionBase } from 'next-auth/_utils';

const providers = [
  Providers.Credentials({
    name: 'Credentials',
    credentials: {
      email: {
        label: "Email",
        type: "text",
        placeholder: "your@email.com"
      },
      password: {
        label: "Password",
        type: "password"
      }
    },
    authorize: async (credentials) => {
      try {
        const existingUser = await User.findOne({ email: credentials.email });
        if (await verify(existingUser.password, credentials.password)) {
          return existingUser.toObject();
        }
        return null;
      } catch (e) {
        throw new Error('Something wrong with authorization!');
      }
    }
  })
];

const options: InitOptions = {
  providers,
  callbacks: {
    async jwt(token: {[key: string]: any}, user: any) {
      if (user) {
        token.accessToken = user.data.token;
      }
      return token;
    },

    async session(session: SessionBase, token: {[key: string]: any}) {
      session.accessToken = token.accessToken;
      return session;
    }
  },
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    error: '/login', // Changing the error redirect page to our custom login page
  },
  database: serverRuntimeConfig.databaseUrl
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
