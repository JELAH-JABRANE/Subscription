import { user } from "../controllers/user.js";
import {Router} from 'express'

const router = Router();

router.post('/',user)



export default router

