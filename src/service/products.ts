import connection from "../connection/connection";
import Products from "../interfaces/products";
import ProductModel from "../model/products";


class ProductService {
  model:ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  async createService(product:Products):Promise<Products> {
    return this.model.createModel(product);
  }

  async getAll(): Promise<Products[]> {
    const books = await this.model.getAll();
    return books;
  }
}

export default ProductService;