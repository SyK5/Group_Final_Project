import express from 'express';

const { getAllProducts, createProduct } = require('../controllers/ProductController');
const router = express.Router();


router.get('/', getAllProducts);


router.post('/', createProduct);

module.exports = router;
