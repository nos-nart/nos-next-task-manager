import mongoose from 'mongoose';

const validateEmail = (email: string): boolean => {
  var re = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  return re.test(email);
}

export interface IUser extends mongoose.Document {
  email: string;
  password: string;
}

export const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validateEmail, 'Invalid email address'],
    },
    password: {
      type: String,
      required: true,
      min: [6, 'Too short']
    }
  },
  {
    timestamps: true
  }
)

const User = mongoose.model<IUser>('User', UserSchema);
export default User;
