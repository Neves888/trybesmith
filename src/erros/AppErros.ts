export default class NotFoundError extends Error {
  public statusCode = 404;

  public name = 'AppError';

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}