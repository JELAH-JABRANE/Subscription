import {Router} from 'express'
import { signin } from '../controllers/signin.js';

const router = Router();

router.post('/signin',signin)

export default router