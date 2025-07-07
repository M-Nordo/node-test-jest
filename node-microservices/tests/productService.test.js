const request = require('supertest');
const app = require('../product-service/server');

describe('Product Service', () => {
  it('should create a new product', async () => {
    const res = await request(app)
      .post('/products')
      .send({ name: 'Laptop', price: 1500 });
    
    expect(res.status).toBe(201);
    expect(res.body.message).toContain('Product Laptop created with price 1500');
  });

  it('should get list of products', async () => {
    const res = await request(app).get('/products');
    
    expect(res.status).toBe(200);
    expect(res.body).toEqual(expect.arrayContaining([
      expect.objectContaining({
        productId: 101,
        name: 'Laptop',
        price: 1500,
      })
    ]));
  });
});