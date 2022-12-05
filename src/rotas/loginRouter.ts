import { Router } from 'express';
import LoginController from '../controllers/loginController';

const loginRouter = Router();
const loginUser = new LoginController();

loginRouter.post('/', (req, res) => loginUser.login(req, res));

export default loginRouter;