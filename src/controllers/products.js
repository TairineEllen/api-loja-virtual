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

  async getById(req, res) {
    const { params: { id } } = req;

    try {
      const product = await this.Product.find({ _id: id });
      res.send(product);
    } catch (error) {
      res.status(400).send(error.message);
    }  
  }
}

export default ProductsController;
