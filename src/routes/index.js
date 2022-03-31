import express from 'express';
import productsRoute from './products';

const router = express.Router();

router.get('/', (req, res) => res.send('Hello, World'));
router.use('/products', productsRoute);

export default router;
