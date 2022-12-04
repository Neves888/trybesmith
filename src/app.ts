import express from 'express';

import router from './rotas/productRouter';
import userRouter from './rotas/userRouter';
import errorMiddleware from './middlewares/error';

const app = express();

app.use(express.json());
app.use('/products', router);
app.use('/users', userRouter);
app.use(errorMiddleware);

export default app;
