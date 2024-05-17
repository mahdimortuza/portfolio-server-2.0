import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import config from '../../config';
import { TRole, TUser, UserModelForStatics } from './user.interface';

const role: TRole[] = ['user', 'admin'];

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: [true, 'User name is required'],
    },

    email: {
      type: String,
      required: [true, 'User email is required'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    role: {
      type: String,
      required: true,
      enum: role,
      default: 'user',
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

userSchema.statics.isUserExistsByUserEmail = async function (email: string) {
  return await User.findOne({ email }).select('+password');
};

userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

export const User = model<TUser, UserModelForStatics>('User', userSchema);
