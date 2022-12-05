import { Router } from 'express';
import OrdersController from '../controllers/ordersController';
import auth from '../middlewares/auth';

const ordersRouter = Router();
const ordersList = new OrdersController();

ordersRouter.get('/', (req, res) => ordersList.findAll(req, res));
ordersRouter.post('/', auth, (req, res) => ordersList.createOrder(req, res));

export default ordersRouter;