import { Router } from "express";
import { index, show, create, update, bulk } from "../controllers/conceptController";
const router: Router = Router();

router.get("/", index);
router.get("/:id", show)
router.post("/", create)
router.patch("/:id", update)
router.post("/bulk", bulk)
export { router } 