import express from 'express';
import Vasesseed from "./seed/Vasesseed.js"



const router = express.Router();

router.get('/', (req, res) => {
  res.json(Vasesseed)
});

export default router;
