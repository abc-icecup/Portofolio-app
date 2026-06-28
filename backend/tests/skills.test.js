import request from 'supertest';
import app from '../App.js';

describe('Skills Management API Automation Testing', () => {
  let authToken;

  beforeAll(async () => {
    const timestamp = Date.now();
    const mockUser = {
      username: `skill_user_${timestamp}`,
      email: `skill.test.${timestamp}@gmail.com`,
      password: 'Password123!'
    };

    await request(app).post('/auth/register').send(mockUser);

    const loginRes = await request(app).post('/auth/login').send({
      email: mockUser.email,
      password: mockUser.password
    });

    authToken = loginRes.body.token; 
  });

  it('SHOULD fetch all skills list successfully with token authentication', async () => {
    const res = await request(app)
      .get('/skills')
      .set('Authorization', `Bearer ${authToken}`); 
    
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});