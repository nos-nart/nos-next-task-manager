import { Schema, Document } from 'mongoose';

const validateEmail = (email: string): boolean => {
  var re = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gi;
  return re.test(email);
}

export interface IUser extends Document {
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema(
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

export { UserSchema };
