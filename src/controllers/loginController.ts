import { Request, Response } from 'express';
import LoginService from '../services/loginService';

export default class LoginController {
  loginService = new LoginService();

  async login(req: Request, res: Response) {
    const { code, response } = await this.loginService.login(req.body);
    if (code) return res.status(code as unknown as number).json({ message: response });
    res.status(200).json(response);
  }
}