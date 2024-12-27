import { signup } from "../controllers/signup.js";
import {Router} from 'express'

const router = Router();

router.post('/',signup)


export default router

