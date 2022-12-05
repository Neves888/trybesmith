import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces/IUser';
import msql from './connection';

export default class UserModel {
  private connection = msql;

  async create({ username, classe, level, password } : IUser):
  Promise<number> {
    const isertUser = `INSERT INTO 
    Trybesmith.Users(username, classe, level, password) VALUES (?, ?, ?, ?)`;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      isertUser,
      [username, classe, level, password],
    );
    return insertId;
  }
}