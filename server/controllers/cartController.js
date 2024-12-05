import User from "../models/User.js"
import Cart from "../models/Cart.js"
import asyncHandler from "../middleware/asyncHandler.js";

export const createCart = asyncHandler(async (req, res) => {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");

    const newCart = new Cart({
        user: user._id,
        items: [],
        totalPrice: 0,
    });

    await newCart.save();
    user.cart = newCart._id;
    await user.save();
    res.status(201).json(newCart);
});

export const addItemToCart = asyncHandler(async (req, res) => {
    const { userId } = req.params;
    const { productId, quantity, price } = req.body;
    const cart = await Cart.findOne({ user: userId });
    if (!cart) throw new Error("Cart not found");

    const existingItem = cart.items.find(item => item.productId.toString() === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.items.push({ productId, quantity, price });
    }

    cart.totalPrice = cart.items.reduce((total, item) => total + item.quantity * item.price, 0);
    await cart.save();
    res.status(200).json(cart);
});

export const getUserCart = asyncHandler(async (req, res) => {
    const { userId } = req.params;
    const cart = await Cart.findOne({ user: userId })
        .populate("items.productId")
        .populate("user");
    res.status(200).json(cart);
});

export const deleteItemFromCart = asyncHandler(async (req, res) => {
    const { userId, productId } = req.params;
    const cart = await Cart.findOne({ user: userId });
    if (!cart) throw new Error("Cart not found");

    cart.items = cart.items.filter(item => item.productId.toString() !== productId);
    cart.totalPrice = cart.items.reduce((total, item) => total + item.quantity * item.price, 0);

    await cart.save();
    res.status(200).json(cart);
});

