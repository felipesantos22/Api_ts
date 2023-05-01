import express from 'express';
import ProductController from '../controller/products';

const app = express();

app.use(express.json());

// Rota products
const productController = new ProductController();
app.get('/products', productController.getAll);

export default app;