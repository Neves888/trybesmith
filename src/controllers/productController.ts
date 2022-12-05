import { Request, Response } from 'express';

import ProductRegistrationService from '../services/productService';

export default class PoductRegistrationController {
  products = new ProductRegistrationService();

  async create(req: Request, res: Response) {
    const { code, response } = await this.products.create(req.body);
    if (code) return res.status(code as unknown as number).json({ message: response });
    res.status(201).json(response);
  }

  async findAll(_req: Request, res: Response) {
    const { code, response } = await this.products.findAll();
    if (code) return res.status(code as unknown as number).json({ message: response });
    return res.status(200).json(response);
  }
}