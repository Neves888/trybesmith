import { ResultSetHeader, RowDataPacket } from 'mysql2';
import mysql from './connection';
import { IProduct, IProductId } from '../interfaces/IProduct';

export default class ProductRegistrationModel {
  private connection = mysql;

  async create(products: IProduct): Promise<IProductId> {
    const { name, amount } = products;
    const insertProduct = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      insertProduct,
      [name, amount],
    );

    return { id: insertId, ...products };
  }

  async findAll(): Promise<IProductId[]> {
    const tableAllProducts = 'SELECT * FROM Trybesmith.Products';
    const [result] = await this.connection
      .execute<IProductId[] & RowDataPacket[]>(tableAllProducts);

    return result;
  }

  async updateOrderId(userId: number, productId: number): Promise<void> {
    const updateOrderId = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';
    await this.connection.execute(updateOrderId, [userId, productId]); 
  }
}
