import { Router } from "express";
import urlsController from "../controllers/urls.controller.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";
import { validSchemaUrls } from "../middlewares/urls.middleware.js";

const router = new Router();

router.post("/urls/shorten", isLoggedIn, validSchemaUrls, urlsController.store);
router.get("/urls/:id", urlsController.findid);
router.get("/urls/open/:shortUrl", urlsController.convertLink);
router.delete("/urls/:id", isLoggedIn, urlsController.deleteURL);

export default router;
