const request = require('supertest');
const app = require('../order-service/server');

describe('Order Service', () => {
  it('should create a new order', async () => {
    const res = await request(app)
      .post('/orders')
      .send({ userId: 1, productId: 101, quantity: 2 });
    
    expect(res.status).toBe(201);
    expect(res.body.message).toContain('Order created for user 1 with product 101. Quantity: 2');
  });

  it('should get list of orders', async () => {
    const res = await request(app).get('/orders');
    
    expect(res.status).toBe(200);
    expect(res.body).toEqual(expect.arrayContaining([
      expect.objectContaining({
        orderId: 1,
        userId: 1,
        productId: 101,
        quantity: 2,
      })
    ]));
  });
});