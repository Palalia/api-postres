import { Router } from "express";
import { index, show, create, update, bulk } from "../controllers/productController";
import { } from "domain";
const router: Router = Router();

router.get("/", index);
router.get("/:id", show)
router.post("/", create)
router.patch("/:id", update)
router.post("/bulk", bulk)
export { router } 