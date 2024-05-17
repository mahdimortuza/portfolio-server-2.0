import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../../config';
import { AppError } from '../../errors/appError';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import { createToken } from './auth.utils';

const loginUser = async (payload: TLoginUser) => {
  const user = await User.isUserExistsByUserEmail(payload?.email);

  if (!user) {
    throw new AppError(404, 'User not found');
  }
  if (!(await User.isPasswordMatched(payload?.password, user.password)))
    throw new AppError(404, 'Password did not matched.');

  const jwtPayload = {
    email: user.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
  };
};

// const changePassword = async (
//   userData: JwtPayload,
//   payload: { currentPassword: string; newPassword: string },
// ) => {
//   const user = await User.isUserExistsByUserEmail(userData.email);
//   if (!user) {
//     throw new AppError(404, 'This user is not found');
//   }
//   //   checking if the password is correct
//   if (!(await User.isPasswordMatched(payload.currentPassword, user?.password)))
//     // letting the user login using access token and refresh token.
//     throw new AppError(404, 'Password did not matched.');

//   // hash new password
//   const newHashedPassword = await bcrypt.hash(
//     payload.newPassword,
//     Number(config.bcrypt_salt_round),
//   );

//   await User.findOneAndUpdate(
//     {
//       email: userData.email,
//       role: userData.role,
//     },
//     {
//       password: newHashedPassword,
//       passwordChangedAt: new Date(),
//     },
//   );
//   return null;
// };

const refreshToken = async (token: string) => {
  const decoded = jwt.verify(
    token,
    config.jwt_refresh_secret as string,
  ) as JwtPayload;

  const { email } = decoded;

  const user = await User.isUserExistsByUserEmail(email);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }

  const jwtPayload = {
    email: user.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return {
    accessToken,
  };
};

export const AuthServices = {
  loginUser,
  // changePassword,
  refreshToken,
};
