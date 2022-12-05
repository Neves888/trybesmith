import express from 'express';

import { ordersRouter, productRouter, userRouter } from './rotas';
import errorMiddleware from './middlewares/error';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', ordersRouter);
app.use(errorMiddleware);

export default app;
