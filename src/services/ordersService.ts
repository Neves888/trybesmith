import { IResponse } from '../interfaces/IResponse';
import OrdersModel from '../models/ordersModel';

export default class OrdersService {
  orderModel = new OrdersModel();

  async findAll(): Promise<IResponse> {
    const ordersList = await this.orderModel.findAll();
    return { code: null, response: ordersList };
  }
}