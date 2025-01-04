class AppError extends Error {
  statusCode: number;
  status: string;
  isOperational: boolean;

  constructor(
    message: string,
    statusCode: number = 500,
    status: string = 'error',
    isOperational: boolean = true
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.status = status;

    Error.captureStackTrace(this, AppError);
  }
}

export default AppError;
