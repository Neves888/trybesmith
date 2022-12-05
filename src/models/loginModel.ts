import { RowDataPacket } from 'mysql2';
import { ILogin } from '../interfaces/ILogin';
import mysql from './connection';

export default class LoginModel {
  private connection = mysql;

  async login(username: string, password: string): Promise<ILogin> {
    const userLogin = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?';
    const [[result]] = await 
    this.connection.execute<ILogin[] & RowDataPacket[]>(userLogin, [username, password]);

    return result;
  }
}