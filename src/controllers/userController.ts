import { Request, Response } from 'express';
// import { IUser } from '../interfaces/IUser';
import UserService from '../services/userService';
// import TokenGeneration from '../utils/tokenUser';

export default class UserController {
  user = new UserService();

  // token = new TokenGeneration();

  async create(req: Request, res: Response): Promise<void> {
    const { username, classe, level, password } = req.body;
    const createUser = await this.user.create(username, classe, level, password);
    // const validationToken = this.token.tokenGeneration(createUser);
    // return res.status(201).json(validationToken);
    res.status(201).json(createUser);
  }
}