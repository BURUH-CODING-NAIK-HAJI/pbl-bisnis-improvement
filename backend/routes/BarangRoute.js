import express from "express";
import {
  getBarang,
  getBarangById,
  createBarang,
  updateBarang,
  deleteBarang,
} from "../controller/BarangController.js";

const router = express.Router();

router.get("/product", getBarang);
router.get("/product/:id", getBarangById);
router.post("/product", createBarang);
router.patch("/product/:id", updateBarang);
router.delete("/product/:id", deleteBarang);

export default router;
