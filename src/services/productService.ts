import { IProduct } from '../interfaces/IProduct';
import { IResponse } from '../interfaces/IResponse';
import ProductRegistrationModel from '../models/ProductModel';
import verifyProduct from './validations/productValidation';

export default class ProductRegistrationService {
  addProducts = new ProductRegistrationModel();

  async create(products: IProduct): Promise<IResponse> { 
    const { code, response } = verifyProduct(products);
    if (code) return { code, response };
    const newProduct = await this.addProducts.create(products);
    return { code: null, response: newProduct };
  }

  async findAll(): Promise<IResponse> {
    const productList = await this.addProducts.findAll();
    return { code: null, response: productList };
  }
}