import request from 'supertest';
import mysql2 from 'mysql2';
import app from '../App.js';

if (mysql2 && mysql2.Connection && mysql2.Connection.prototype) {
  if (!global.Buffer.prototype.cesu8Slice) {
    global.Buffer.prototype.cesu8Slice = global.Buffer.prototype.utf8Slice;
    global.Buffer.prototype.cesu8Write = global.Buffer.prototype.utf8Write;
  }
}

describe('Authentication API Regression Testing', () => {
  const timestamp = Date.now();
  const testUser = {
    username: `user_${timestamp}`,
    email: `test.rjs.${timestamp}@gmail.com`,
    password: 'Password123!'
  };

  it('SHOULD register a new user successfully', async () => {
    const res = await request(app)
      .post('/auth/register')
      .send(testUser);
    
    expect([200, 201]).toContain(res.statusCode);
  });

  it('SHOULD fail registration when email is already registered', async () => {
    const res = await request(app)
      .post('/auth/register')
      .send(testUser);
    
    expect([400, 409]).toContain(res.statusCode);
  });

  it('SHOULD login successfully with valid credentials', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({
        email: testUser.email,
        password: testUser.password
      });
    
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });
});