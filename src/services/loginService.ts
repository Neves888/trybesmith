import { ILogin } from '../interfaces/ILogin';
import LoginModel from '../models/loginModel';

export default class LoginService {
  loginUser = new LoginModel();

  async login(username: string, password: string): Promise<ILogin> {
    const userLogin = await this.loginUser.login(username, password);

    return userLogin;
  }
}