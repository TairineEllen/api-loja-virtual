class ProductsController {
  constructor(Product) {
    this.Product = Product;
  }

  async get(req, res) {
    try {
      const products = await this.Product.find({});
      res.send(products);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}

export default ProductsController;
