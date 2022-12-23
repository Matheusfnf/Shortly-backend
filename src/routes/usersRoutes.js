import { Router } from "express";
import usersController from "../controllers/users.controller.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";
import { validSchemaUsers } from "../middlewares/users.middleware.js";

const router = new Router();

router.post("/signup", validSchemaUsers, usersController.store);
router.get("/users/me", isLoggedIn, usersController.showme);
router.get("/ranking", usersController.ranking);

export default router;
