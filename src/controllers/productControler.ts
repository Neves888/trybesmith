import { Request, Response } from 'express';

import ProductRegistrationService from '../services/productService';

export default class PoductRegistrationController {
  products = new ProductRegistrationService();

  public async create(req: Request, res: Response) {
    const { message } = req.body;
    const productAdd = await this.products.create(message);
    res.status(201).json(productAdd);
  }

  public async getAll(_req: Request, res: Response) {
    const productList = await this.products.getAll();
    return res.status(200).json(productList);
  }
}