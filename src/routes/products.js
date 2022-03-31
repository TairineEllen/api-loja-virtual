import express from 'express';

const router = express.Router();

router.get('/', (req, res) => res.send([{
  name: 'Default Product',
  description: 'Product description',
  price: 100
}]));
