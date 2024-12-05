import express from 'express';
import { addFavorite, removeFavorite, getFavorites, moveFavoriteToCart } from '../controllers/userFavoritesController.js';


const router = express.Router();

router.post('/add', addFavorite); 
router.post('/remove', removeFavorite); 
router.get('/:userId', getFavorites);
router.post('/move-to-cart', moveFavoriteToCart);
export default router;

