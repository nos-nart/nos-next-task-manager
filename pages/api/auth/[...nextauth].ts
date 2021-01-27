import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { InitOptions } from 'next-auth';
import Providers from 'next-auth/providers';

const options: InitOptions = {
  pages: {},
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: "Email", type: "text", placeholder: "your@email.com" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
  
        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ],
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);