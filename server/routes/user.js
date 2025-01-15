import { signup } from "../controllers/signup.js";
import { verifyEmail } from "../controllers/verify.js";
import {Router} from 'express'

const router = Router();

router.post('/',signup)
router.get('/verify/:token', verifyEmail);



export default router

