/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
import { USER_ROLE } from './user.constants';

export type TRole = 'user' | 'admin';

export type TUser = {
  name: string;
  email: string;
  password: string;
  role: TRole;
};

export interface UserModelForStatics extends Model<TUser> {
  isUserExistsByUserEmail(email: string): Promise<TUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}

export type TUserRole = keyof typeof USER_ROLE;
