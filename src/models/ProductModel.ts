import { ResultSetHeader, RowDataPacket } from 'mysql2';
import mysql from './connection';
import { IProduct } from '../interfaces/IProduct';

export default class ProductRegistrationModel {
  private connection = mysql;

  public async create(products: IProduct): 
  Promise<IProduct> {
    const { name, amount } = products;

    const tableProduct = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';

    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(tableProduct, [name, amount]);

    return { id: insertId, ...products };
  }

  public async getAll(): Promise<IProduct[]> {
    const tableAllProducts = 'SELECT * FROM Trybesmith.Products';
    const [result] = await this.connection.execute<IProduct[] & RowDataPacket[]>(tableAllProducts);

    return result;
  }
}
