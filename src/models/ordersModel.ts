import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IOrders } from '../interfaces/IOrders';
import { IUser } from '../interfaces/IUser';
import mysql from './connection';

export default class OdersModel {
  private connection = mysql;

  async findAll(): Promise<IOrders[]> {
    const ordersProducts = `
    SELECT orders.id, orders.userId, JSON_ARRAYAGG(products.id) AS productsIds 
    FROM Trybesmith.Orders AS orders
    INNER JOIN Trybesmith.Products AS products
    ON products.orderId = orders.id 
    GROUP BY orders.id;`;
    const [result] = await this.connection.execute<IOrders[] & RowDataPacket[]>(ordersProducts);

    return result;
  }

  async createOrder(body: IUser): Promise<number> {
    const orderTable = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(orderTable, [body.id]);
    return insertId;
  }
}