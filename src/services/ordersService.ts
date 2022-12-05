import { IOrders } from '../interfaces/IOrders';
import OrdersModel from '../models/ordersModel';

export default class OrdersService {
  ordersProducts = new OrdersModel();

  async findAll(): Promise<IOrders[]> {
    const ordersList = await this.ordersProducts.findAll();

    return ordersList;
  }
}