import { Request, Response } from 'express';
import OrderService from '../services/ordersService';

export default class OrdersController {
  ordersProduct = new OrderService();

  async findAll(_req: Request, res: Response): Promise<void> {
    const ordersList = await this.ordersProduct.findAll();

    res.status(200).json(ordersList);
  }
}