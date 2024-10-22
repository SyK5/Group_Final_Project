import express from 'express';
import vases from './seed/vasesApi.js';



const router = express.Router();

router.get('/', (req, res) => {
  res.json(vases);
});

export default router;
