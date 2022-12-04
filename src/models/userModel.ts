import { ResultSetHeader } from 'mysql2';
import msql from './connection';

export default class UserModel {
  private connection = msql;

  async create(username: string, classe: string, level: number, password: string):
    Promise<number> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users(username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    return insertId;
  }
}