import Cart from "../model/Cart.js";

export const createCart = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const newCart = new Cart({ userId, items: [] });
    await newCart.save();
    res.status(201).json(newCart);
  } catch (error) {
    next(error);
  }
};
export const addItemToCart = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { productId, quantity } = req.body;

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items.push({ productId, quantity });
    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
};
export const getUserCart = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const cart = await Cart.findOne({ userId }).populate("items.productId");

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
};
export const deleteItemFromCart = async (req, res, next) => {
  try {
    const { userId, productId } = req.params;

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = cart.items.filter((item) => item.productId.toString() !== productId);
    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
};
