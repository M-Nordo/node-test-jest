const request = require('supertest');
const app = require('../user-service/server');

describe('User Service', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({ username: 'mehmetyayla', email: 'mehmet@yayla.com' });
    
    expect(res.status).toBe(201);
    expect(res.body.message).toContain('User mehmetyayla created successfully!');
  });

  it('should get list of users', async () => {
    const res = await request(app).get('/users');
    
    expect(res.status).toBe(200);
    expect(res.body).toEqual(expect.arrayContaining([
      expect.objectContaining({
        username: 'mehmetyayla',
        email: 'mehmet@yayla.com',
      })
    ]));
  });
});