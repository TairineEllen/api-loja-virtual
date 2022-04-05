import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: String,
  description: String,
  prince: Number
});

const Product = mongoose.model('Product', schema);

export default Product;
