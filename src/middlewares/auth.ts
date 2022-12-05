import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../utils/jwt';

export default (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  console.log(authorization);
  
  const { code, response } = verifyToken(authorization as string);
  if (code) return res.status(Number(code)).json({ message: response });
  req.body.user = response;
  next();
};