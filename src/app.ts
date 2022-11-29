import express from 'express';

import router from './rotas/productRouter';

const app = express();

app.use(express.json());
app.use('/products', router);

export default app;
