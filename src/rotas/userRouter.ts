import { Router } from 'express';

import UserController from '../controllers/userController';
// import tokenUser from '../middlewares/tokenUser';

const router = Router();
const userControler = new UserController();

router.post('/', (req, res) => userControler.create(req, res));

export default router;