import express from "express"
import {createCart, addItemToCart, getUserCart, deleteItemFromCart} from "../controllers/cartController.js"

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
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
});

router.get("/:userId", async (req,res) => {
    const {userId} = req.params;

    try {
        const cart = await getUserCart(userId);
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
});

router.delete("/:userId/delete-item/:productId", async (req, res) =>{
    const {userId, productId} = req.params;
    try {
        const cart = await deleteItemFromCart(userId, productId);
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

module.exports = router;
