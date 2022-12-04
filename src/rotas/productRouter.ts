import { Router } from 'express';

import PoductRegistrationController from '../controllers/productController';
// import validation from '../middlewares/validation';

const router = Router();
const productControler = new PoductRegistrationController();

router.post('/', (req, res) => productControler.create(req, res));
router.get('/', (req, res) => productControler.findAll(req, res));

export default router;