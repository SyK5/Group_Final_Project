import User from "../model/User.js"
import Cart from "../model/Cart.js"

const createCart = async (userId) => {
    const user = await User.findBy(userId);
    if (!user) throw new Error ("User not found")

        const newCart = new Cart ({
            user: user._id,
            item: [],
            totalPrice: 0,
        });

        await newCart.save();

        user.cart = newCart._id;
        await user.save();
        return newCart;
}

const addItemToCart = async (userId, productId, quantity, price) => {
    const cart = await Cart.findOne({user: userId});
    if (!cart) throw new Error ("Cart not found");
    const existingItem = cart.items.find(item => item.productId.toString() === productId);
    if(existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.items.push({productId, quantity, price});
    }
    cart.totalPrice = cart.items.reduce((total, item) => total + item.quantity * item.price, 0)
    await cart.save();

    return cart;
}

const getUserCart = async (userId) => {
    const cart = await Cart.findOne({user: userId}).populate("items.productId").populate("user");
    return cart;
};

const deleteItemFromCart = async (userId, productId) => {
    const cart = await Cart.findOne({user: userId});
    if (!cart) throw new Error("Cart not found");
    
    cart.items = cart.items.filter(item => item.productId.toString() !== productId);
cart.totalPrice = cart.item.reduce((total, item) => total + item.quantity * item.price, 0);

await cart.save();
return cart;
}

module.exports = {createCart, addItemToCart, getUserCart, deleteItemFromCart};