import { IResponse } from '../interfaces/IResponse';
import loginisOk from './validations/loginValidation';
import LoginModel from '../models/loginModel';
import { ILogin } from '../interfaces/ILogin';
import { signToken } from '../utils/jwt';

export default class LoginService {
  loginModel = new LoginModel();

  async login(body: ILogin) : Promise<IResponse> {
    const { code, response } = loginisOk(body);
    if (code) return { code, response };
    const verfyLogin = await this.loginModel.login(body);    
    if (!verfyLogin) return { code: 401, response: 'Username or password invalid' };
    const token = signToken(verfyLogin);
    return { code: null, response: { token } };
  }
}