import { NextApiRequest, NextApiResponse } from 'next';
import User from '@/models/user.model';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;
  try {
    const newUser = new User({ email, password });
    console.log('newUser: ', newUser);

    await newUser.save();
  } catch (error) {
    res.status(400).json({ error });
  }
}