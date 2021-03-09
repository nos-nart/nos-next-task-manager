import { NextApiRequest, NextApiResponse } from 'next';
import { User } from '@/utils/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const existingUser = await User.findOne({ email: 'test@gmail.com' });
    console.log('existingUser ~> ', existingUser);
    res.status(200).json({ message: 'query successfully' });
  } catch (error) {
    res.status(400).json({ error });
  }
}