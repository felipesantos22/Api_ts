import { Request, Response } from 'express';
import ProductService from '../service/products';


class ProductController {
  productService: ProductService;

  constructor(productService = new ProductService()) {
    this.productService = productService;   
    this.getAll = this.getAll.bind(this);
    this.createProduct = this.createProduct.bind(this);
  }

  async createProduct(req: Request, res: Response): Promise<void> {
    const product = req.body;
    const productCreated = await this.productService.createService(product);
    res.status(201).json(productCreated);
  }

  async getAll(_request: Request, response:Response):Promise<void> {
    const books = await this.productService.getAll();
    response.status(200).json(books);
  }
}

export default ProductController;