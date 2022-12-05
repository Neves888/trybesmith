import { Request, Response } from 'express';
import OrderService from '../services/ordersService';

export default class OrdersController {
  orderService = new OrderService();

  async findAll(_req: Request, res: Response) {
    const { code, response } = await this.orderService.findAll();
    if (code) return res.status(code as unknown as number).json({ message: response });
    res.status(200).json(response);
  }

  async createOrder(req: Request, res: Response) {
    const { code, response } = await this.orderService.createOrder(req.body);
    if (code) return res.status(code as unknown as number).json({ message: response });
    res.status(201).json(response);
  }
}