import { Router } from "express";
import usersController from "../controllers/users.controller.js";
import { validSchemaUsers } from "../middlewares/users.middleware.js";

const router = new Router();

router.post("/signup", validSchemaUsers, usersController.store);
router.get("/users/me", usersController.showme);

export default router;
