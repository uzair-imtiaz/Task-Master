import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils';
import { APP_ERROR } from '../constants/error.constant';

const sendErrorMsg = (err: AppError, req: Request, res: Response) => {
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      message: err.message,
      status: err.status,
    });
  }
  if (req.originalUrl.startsWith('/api')) {
    return res.status(500).json({
      message: APP_ERROR.SERVER_ERROR,
      status: 'error',
    });
  } else {
    return res.status(err.statusCode).render('error', {
      status: 'error',
      message: APP_ERROR.SERVER_ERROR,
    });
  }
};

const errorMiddleware = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode;
  err.status = err.status;

  let error = { ...err };
  error.message = err.message;
  // Hanlde JWT error
  sendErrorMsg(error, req, res);
  next();
};

export default errorMiddleware;
