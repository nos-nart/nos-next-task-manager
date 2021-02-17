import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { InitOptions } from 'next-auth';
import { verify } from 'argon2';
import Providers from 'next-auth/providers';
import { User } from '@/utils/db';
import { serverRuntimeConfig } from '../../../next.config';

const options: InitOptions = {
  pages: {
    signIn: '/login',
    signOut: '/register',
  },
  session: {},
  providers: [
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
        const existingUser = await User.findOne({ email: credentials.email });

        if (await verify(existingUser.password, credentials.password)) {
          return existingUser.toObject();
        }

        return null;
      }
    })
  ],
  callbacks: {},
  database: serverRuntimeConfig.databaseUrl
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
