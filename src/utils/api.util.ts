import { NextFunction, Request, Response } from 'express';
import { ResponseOptions } from '../types';

const applyHeaders = (res: Response, headers?: HeadersInit) => {
  if (!headers) return; // Handle the case where headers are undefined

  if (headers instanceof Headers) {
    for (const [key, value] of headers) {
      res.setHeader(key, value);
    }
  } else if (Array.isArray(headers)) {
    for (const [key, value] of headers) {
      res.setHeader(key, value);
    }
  } else {
    for (const key in headers) {
      if (Object.prototype.hasOwnProperty.call(headers, key)) {
        res.setHeader(key, headers[key]);
      }
    }
  }
};

export const successResponse = {
  send: (res: Response, { status, headers }: ResponseOptions) => {
    applyHeaders(res, headers);
    return res.status(status).json({ message: 'success', status });
  },

  sendData: (
    res: Response,
    { status, message, data, headers }: ResponseOptions
  ) => {
    applyHeaders(res, headers);
    return res.status(status).json({ message, status, data });
  },

  sendMessage: (
    res: Response,
    { status, message, headers }: ResponseOptions
  ) => {
    applyHeaders(res, headers);
    return res.status(status).json({ message, status });
  },
};

export const catchAsync =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
