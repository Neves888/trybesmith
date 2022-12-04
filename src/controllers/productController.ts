import { Request, Response } from 'express';

import ProductRegistrationService from '../services/productService';

export default class PoductRegistrationController {
  products = new ProductRegistrationService();

  async create(req: Request, res: Response): Promise<void> {
    const { name, amount } = req.body;
    const result = { name, amount };
    const productAdd = await this.products.create(result);
    res.status(201).json(productAdd);
  }

  async findAll(_req: Request, res: Response) {
    const productList = await this.products.findAll();
    return res.status(200).json(productList);
  }
}