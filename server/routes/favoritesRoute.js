import express from 'express';
import { createFavorite, getFavorites, deleteFavorite } from '../controllers/favoritesController.js';

const router = express.Router();

router.post('/:userId/create', createFavorite);

router.get('/:userId', getFavorites);

router.delete('/:userId/delete/:productId', deleteFavorite);

export default router;

