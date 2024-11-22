import express from 'express';
const router = express.Router();

let favorites = []; 


router.post('/', (req, res) => {
  const { productId } = req.body;
  
  if (!productId) {
    return res.status(400).json({ message: 'Product ID is required' });
  }
  
  
  if (!favorites.includes(productId)) {
    favorites.push(productId);
    return res.status(201).json({ message: 'Product added to favorites' });
  }
  
  res.status(400).json({ message: 'Product is already in favorites' });
});


router.get('/', (req, res) => {
  res.status(200).json({ favorites });
});


router.delete('/:productId', (req, res) => {
  const { productId } = req.params;
  
  favorites = favorites.filter(item => item !== productId);
  res.status(200).json({ message: 'Product removed from favorites' });
});

export default router;
