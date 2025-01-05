import express, { Application, NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { errorMiddleware, passportMiddleware } from './middlewares';
import { AppError } from './utils';
import { APP_ERROR } from './constants/error.constant';
import router from './routes';

const app: Application = express();

// Middlewares
app.use(express.json({ limit: '10mb' }));
app.use(cors());
app.use(helmet());
app.use(errorMiddleware);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('tiny'));
}

app.use(passportMiddleware);

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: 'Too many requests, please try again later.',
});
app.use('/api/', apiLimiter);

app.use('/api', router);

// Health check route
app.get('/api/health', (_, res: Response) => {
  res.status(200).json({ status: 'API is running smoothly! 🚀' });
});

// 404 Route
app.all('*', (req: Request, res: Response, next: NextFunction) => {
  return next(new AppError(APP_ERROR.NOT_FOUND, 404));
});

export default app;
