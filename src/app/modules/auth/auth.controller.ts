import config from '../../config';
import catchAsync from '../../utils/catchAsync';
import { AuthServices } from './auth.service';

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);
  const { refreshToken, accessToken } = result;

  res.cookie('refreshToken', refreshToken, {
    secure: config.NODE_DEV === 'production',
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    statusCode: 201,
    message: ' User logged in successfully',
    data: {
      accessToken,
    },
  });
});

// const changePassword = catchAsync(async (req, res) => {
//   const { ...passwordData } = req.body;
//   const result = await AuthServices.changePassword(req.user, passwordData);
//   res.status(200).json({
//     success: true,
//     statusCode: 201,
//     message: ' Password is changed successfully',
//     data: result,
//   });
// });

const refreshToken = catchAsync(async (req, res) => {
  const refreshToken = req.cookies;
  const result = await AuthServices.refreshToken(refreshToken);

  res.status(200).json({
    success: true,
    statusCode: 201,
    message: ' Access token is retrieved successfully',
    data: result,
  });
});

export const AuthControllers = {
  loginUser,
  //   changePassword,
  refreshToken,
};
