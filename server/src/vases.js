import express from 'express';
import vases from './seed/vases.js';



const router = express.Router();

router.get('/', (req, res) => {
  res.json(vases);
});

export default router;
