import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { IResponse } from '../interfaces/IResponse';
import { IUser } from '../interfaces/IUser';

export function signToken(user: IUser): string {
  const { password, ...userWithoutPassword } = user;

  return jwt.sign(userWithoutPassword, process.env.JWT_SECRET as string, {
    algorithm: 'HS256',
    expiresIn: '1d',
  });
}

export function verifyToken(token: string): IResponse {
  if (!token) return { code: 401, response: 'Token not found' };

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET as string);

    return { code: null, response: payload };
  } catch (error) { 
    return { code: 401, response: 'Invalid token' };
  }
}