import { Router } from 'express';

import ProductRegistrationController from '../controllers/productControler';
import validation from '../middlewares/validation';

const router = Router();
const productControler = new ProductRegistrationController();

router.post('/', validation, productControler.create.bind(productControler));
router.get('/', productControler.getAll.bind(productControler));

export default router;