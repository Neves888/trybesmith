import { Router } from 'express';
import OrdersController from '../controllers/ordersController';

const ordersRouter = Router();
const ordersList = new OrdersController();

// ordersRouter.post('/', (req, res) => ordersList.create(req, res));
ordersRouter.get('/', (req, res) => ordersList.findAll(req, res));

export default ordersRouter;