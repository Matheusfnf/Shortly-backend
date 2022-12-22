import { Router } from "express";
import tokenController from "../controllers/token.controller.js";

const router = new Router();

router.post("/", tokenController.store);
export default router;
