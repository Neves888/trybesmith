import { IResponse } from '../interfaces/IResponse';
import { IUser } from '../interfaces/IUser';
import UserModel from '../models/userModel';
import { signToken } from '../utils/jwt';
import userValidation from './validations/userValidation';

export default class UserService {
  userModel = new UserModel();

  async create(body: IUser): Promise<IResponse> {
    const { code, response } = userValidation(body);
    if (code) return { code, response };
    const insertId = await this.userModel.create(body);
    const token = signToken({ id: insertId, ...body });
    return { code: null, response: { token } };
  }
}