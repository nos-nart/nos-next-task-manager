import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { InitOptions } from 'next-auth';
import Providers from 'next-auth/providers';
import User from '@/models/user.model';

const options: InitOptions = {
  pages: {},
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
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);