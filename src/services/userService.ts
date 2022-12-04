import UserModel from '../models/userModel';

export default class UserService {
  loginUser = new UserModel();

  async create(
    username: string, 
    classe: string, 
    level: number, 
    password: string,
  ): Promise<number> {
    const createUser = await this.loginUser.create(username, classe, level, password);
    return createUser;
  }
}