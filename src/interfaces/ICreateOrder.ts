import { IUser } from './IUser';

export interface ICreateOrder {
  user: IUser,
  productsIds: number[],
}