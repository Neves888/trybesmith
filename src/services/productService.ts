import { IProduct } from '../interfaces/IProduct';
import ProductRegistrationModel from '../models/ProductModel';

export default class ProductRegistrationService {
  public products = new ProductRegistrationModel();

  public async create(products: IProduct):

  Promise<IProduct> {
    const productAdd = await this.products.create(products);
    return productAdd;
  }

  public async getAll(): Promise<IProduct[]> {
    const productList = await this.products.getAll();
    return productList;
  }
}