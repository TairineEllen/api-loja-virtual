class ProductsController {
  get(req, res) {
    return res.send([{
      name: 'Default Product',
      description: 'Product description',
      price: 100
    }]);
  }
}

export default ProductsController;
