import { Router } from "express";
import {
  getItems,
  getItem,
  editItem,
  deleteItem,
  createItem,
} from "../controllers/items.controller";

const router = Router();

router.get("/api/items", getItems);
router.get("/api/items/:id", getItem);
router.post("/api/items", createItem);
router.delete("/api/items/:id", deleteItem);
router.put("/api/items/:id", editItem);
export default router;
