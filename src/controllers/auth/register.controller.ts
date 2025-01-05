import { NextFunction, Request, Response } from 'express';
import {
  AppError,
  generateAccessToken,
  generateRefreshToken,
} from '../../utils';
import { createUser } from '../../services';
import { successResponse } from '../../utils';
import { APP_ERROR } from '../../constants/error.constant';

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userData = req.body;
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    return next(new AppError(APP_ERROR.FIELDS_REQUIRED, 400));
  }

  const [user, created] = await createUser(userData);
  const jsonUser = user.toJSON();

  if (!created) {
    return next(new AppError(APP_ERROR.USER_EXISTS, 409));
  }

  const accessToken = generateAccessToken(jsonUser);
  const refreshToken = generateRefreshToken(jsonUser);

  //   omitPassword(user);

  return successResponse.sendData(res, {
    status: 201,
    message: 'User created successfully',
    data: { ...jsonUser, accessToken, refreshToken },
  });
};
