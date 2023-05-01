import { Pool, ResultSetHeader } from 'mysql2/promise';
import Products from '../interfaces/products';


export default class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async createModel(products: Products): Promise<Products> {
    const { name, amount } = products;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id: insertId, ...products };
  }

  async getAll(): Promise<Products[]> {
    const result = await this.connection.execute('select * from Trybesmith.products');
    const [rows] = result;
    return rows as Products[];
  }
}