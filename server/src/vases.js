import express from 'express';
import vases from './vases.json' assert { type: 'json' };


const router = express.Router();

router.get('/', (req, res) => {
  res.json(vases);
});

export default router;
