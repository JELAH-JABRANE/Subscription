import { Router } from "express";

import { specialite } from "../controllers/specialite.js";



const router = Router();
router.post("/",specialite)

export default router