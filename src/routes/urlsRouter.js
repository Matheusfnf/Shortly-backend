import { Router } from "express";
import urlsController from "../controllers/urls.controller.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";

const router = new Router();

router.post("/urls/shorten", isLoggedIn, urlsController.store);
router.get("/urls/:id", urlsController.findid);
router.get("/urls/open/:shortUrl", urlsController.convertLink);
router.delete("/urls/:id", urlsController.deleteURL);

export default router;
