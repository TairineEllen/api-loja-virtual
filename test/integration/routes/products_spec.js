import { request } from "express";

describe('Routes: Products', () => {
  const defaultProduct = {
    name: 'Default Product',
    description: 'Product description',
    price: 100
  };

  describe('GET /products', () => {
    it('should return a list of products', done => {
      request.get('/products').end((err, res) => {
        expect(res.body[0]).to.eq(defaultProduct);
        done(err);
      });
    });
  });
});
