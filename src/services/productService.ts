import { IProduct } from '../interfaces/IProduct';
import ProductRegistrationModel from '../models/ProductModel';

export default class ProductRegistrationService {
  addProducts = new ProductRegistrationModel();

  async create(products: IProduct): Promise<IProduct> { 
    return this.addProducts.create(products);
  }

  async findAll(): Promise<IProduct[]> {
    const productList = await this.addProducts.findAll();
    return productList;
  }
}