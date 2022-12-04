import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUser } from '../interfaces/IUser';

dotenv.config();

export default class TokenGeneration {
  private jwt = jsonwebtoken;

  tokenGeneration(user: IUser): string {
    const loginUser = { 
      id: user.id, 
      username: user.username, 
      classe: user.classe, 
      level: user.level,
    };
    const token = this.jwt.sign(loginUser, process.env.JWT_SECRET as string, {
      algorithm: 'HS256',
      expiresIn: '1d',
    });
    return token;
  }
}