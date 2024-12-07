import e from "express";
import orderControllers from "../controllers/orderControllers.js";
import { createOrder, getOrders } from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.post("/", createOrder)
orderRouter.get("/", getOrders) 

export default orderRouter;