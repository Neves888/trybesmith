import { Request, Response } from 'express';
import UserService from '../services/userService';

export default class UserController {
  userService = new UserService();

  async create(req: Request, res: Response) {
    const { code, response } = await this.userService.create(req.body);
    if (code) return res.status(code as unknown as number).json({ message: response });
    res.status(201).json(response);
  }
}