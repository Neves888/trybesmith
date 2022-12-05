import { Request, Response } from 'express';
import LoginService from '../services/loginService';

export default class LoginController {
  loginUser = new LoginService();

  async findAll(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body;
    const userLogin = await this.loginUser.login(username, password);

    res.status(200).json(userLogin);
  }
}