import express from "express";
import { checkout, payment } from "../controllers/controller.js";

const router =  express.Router();

router.route("/checkout").post(checkout);
router.route("/payment").post(payment);
// router.route("/payment/:orderId").post(payment);

export default router;