import express from 'express';
import {createProduct,getProduct} from '../controllers/productsController.js';

const productRouter = express.Router();

productRouter.post("/",createProduct)
productRouter.get("/",getProducts)

export default productRouter; 