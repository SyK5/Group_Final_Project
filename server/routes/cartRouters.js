import express from "express"
import {createCart, addItemToCart, getUserCart} from "../controllers/cartController.js"

const router = express.Router();

router.post("/userId/create", async (req, res) => {
    const {userId} = req.params;
    try{
        const cart = await createCart(userId);
        res.status(201).json(cart);

    } catch (error) {
        res.status(500).json({error : error.message })
    }
});

router.post("/:userId/add-item", async (req, res) => {
    const {userId} = req.params;
    const {productId, quantity, price} = req.body;
    try {
        const cart = await addItemToCart(userId, productId, quantity, price);
        res.status(201).json(cart);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})