import { NextApiRequest, NextApiResponse } from 'next';
import { hash } from 'argon2';
import { User } from '@/utils/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await hash(password);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.status(200).json({ user: newUser.toObject() });
  } catch (error) {
    res.status(400).json({ error });
  }
}