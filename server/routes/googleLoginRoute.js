import express from 'express';
import { googleLogin } from '../controllers/googleLogin.js';

const router = express.Router();

router.get('/products', googleLogin);

export default router;
