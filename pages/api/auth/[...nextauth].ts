import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { InitOptions } from 'next-auth';
import Providers from 'next-auth/providers';
import { User } from '@/utils/db';
import { serverRuntimeConfig } from '../../../next.config';

const options: InitOptions = {
  pages: {
    signIn: '/login',
    signOut: '/register',
  },
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
        const existingUser = User.findOne({ email: credentials.email });

        if (existingUser.password === credentials.password) {
          return existingUser.toObject();
        }

        return null;
      }
    })
  ],
  database: serverRuntimeConfig.databaseUri
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
