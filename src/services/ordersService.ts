import { ICreateOrder } from '../interfaces/ICreateOrder';
import { IResponse } from '../interfaces/IResponse';
import OrdersModel from '../models/ordersModel';
import ProductRegistrationModel from '../models/ProductModel';
import verifyProductIds from './validations/orderValidation';

export default class OrdersService {
  orderModel = new OrdersModel();

  productModel = new ProductRegistrationModel();

  async findAll(): Promise<IResponse> {
    const ordersList = await this.orderModel.findAll();
    return { code: null, response: ordersList };
  }

  async createOrder(body: ICreateOrder): Promise<IResponse> {
    const { productsIds, user } = body;
    const { code, response } = verifyProductIds(productsIds);
    if (code) return { code, response };   
    const userId = await this.orderModel.createOrder(user);
    await Promise.all(productsIds.map((productId) => 
      this.productModel.updateOrderId(userId, productId)));
    return { code: null, response: { userId: user.id, productsIds } };
  }
}