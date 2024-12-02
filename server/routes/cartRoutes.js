import express from "express"
import {createCart, addItemToCart, getUserCart, deleteItemFromCart} from "../controllers/cartController.js"

const router = express.Router();

router.post("/userId/create", createCart);

router.post("/:userId/add-item", addItemToCart);

router.get("/:userId", getUserCart);

router.delete("/:userId/delete-item/:productId", deleteItemFromCart)

export default router;
