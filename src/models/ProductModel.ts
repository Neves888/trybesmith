import { ResultSetHeader, RowDataPacket } from 'mysql2';
import mysql from './connection';
import { IProduct } from '../interfaces/IProduct';

export default class ProductRegistrationModel {
  private connection = mysql;

  async create(products: IProduct): Promise<IProduct> {
    const { name, amount } = products;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    const NewProduct = { 
      id: insertId, 
      ...products,
    };
    return NewProduct;
  }

  async findAll(): Promise<IProduct[]> {
    const tableAllProducts = 'SELECT * FROM Trybesmith.Products';
    const [result] = await this.connection.execute<IProduct[] & RowDataPacket[]>(tableAllProducts);

    return result;
  }
}
