import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AuthControllers } from './auth.controller';
import { AuthValidation } from './auth.validation';

const router = express.Router();

router.post('/login', AuthControllers.loginUser);

// router.post('/change-password', AuthControllers.changePassword);
router.post(
  '/refresh-token',
  validateRequest(AuthValidation.refreshTokenValidationSchema),
  AuthControllers.refreshToken,
);

export const AuthRoute = router;
