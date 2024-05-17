import { TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDb = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

const getAllUserFromDb = async () => {
  const result = await User.find();
  return result;
};

const getMe = async (email: string, role: string) => {
  let result = null;
  if (role) {
    result = await User.findOne({ email });
  }

  return result;
};

export const UserServices = {
  createUserIntoDb,
  getAllUserFromDb,
  getMe,
};
