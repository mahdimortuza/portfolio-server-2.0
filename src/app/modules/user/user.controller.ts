import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const user = req.body;
  const result = await UserServices.createUserIntoDb(user);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is created successfully',
    data: result,
  });
});

const getAllUser = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUserFromDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User fetched successfully',
    data: result,
  });
});

const getMe = catchAsync(async (req, res) => {
  const { email, role } = req.user;

  const result = await UserServices.getMe(email, role);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User fetched successfully',
    data: result,
  });
});

export const UserController = {
  createUser,
  getAllUser,
  getMe,
};
