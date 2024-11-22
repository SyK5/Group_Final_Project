import asyncHandler from "../middleware/asyncHandler";
import User from "../model/User";

const addFavorite = asyncHandler(async (req, res) => {
  const { userId, productId } = req.body;
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  if (user.favorites.includes(productId)) {
    return res.status(400).json({ message: "Product already in favorites" });
  }
  user.favorites.push(productId);
  await user.save();

  const updatedUser = await User.findById(userId).populate("favorites");
  res.status(200).json({
    message: "Product added to favorites",
    favorites: updatedUser.favorites,
  });
});
const removeFavorite = asyncHandler(async (req, res) => {
  const { userId, productId } = req.body;
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  if (!user.favorites.includes(productId)) {
    return res.status(400).json({ message: "Product not in favorites" });
  }
  user.favorites = user.favorites.filter((fav) => fav.toString() !== productId);
  await user.save();
  const updatedUser = await User.findById(userId).populate("favorites");
  res.status(200).json({
    message: "Product removed from favorites",
    favorites: updatedUser.favorites,
  });
});

const moveFavoriteToCart = asyncHandler(async (req, res) => {
  const { userId, productId } = req.body;
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  if (!user.favorites.includes(productId)) {
    return res.status(400).json({ message: "Product not in favorites" });
  }
  user.favorites = user.favorites.filter((fav) => fav.toString() !== productId);
  if (!user.cart.includes(productId)) {
    user.cart.push(productId); // Avoid duplicates in cart
  }
  await user.save();

  const updatedUser = await User.findById(userId).populate("favorites cart");
  res.status(200).json({
    message: "Product moved to cart",
    favorites: updatedUser.favorites,
    cart: updatedUser.cart,
  });
});
module.exports = {
  addFavorite,
  removeFavorite,
  moveFavoriteToCart,
};
