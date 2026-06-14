import request from 'supertest';
import app from '../App.js';
import sequelize from '../config/database.js';
import Skill from '../models/Skills.js';

describe('Regression Test Suite - Skills API (/skills)', () => {
  let skillId;

  beforeAll(async () => {
    await sequelize.authenticate();
    await sequelize.sync(); 
    
    if (Skill && Skill.destroy) {
      await Skill.destroy({ where: { title: 'Test Node.js' } });
    }
  });

  afterAll(async () => {
    if (Skill && Skill.destroy) {
      await Skill.destroy({ where: { title: 'Test Node.js' } });
      await Skill.destroy({ where: { title: 'Test React.js Diperbarui' } });
    }
    await sequelize.close(); // Menutup pool koneksi
  });

  // ==========================================================
  // 1 & 2. ENDPOINT: POST /skills (Tambah Data Skill)
  // ==========================================================
  test('POST /skills - Berhasil menambahkan skill baru (Happy Path)', async () => {
    const newSkill = { title: 'Test Node.js', percentage: 85 };
    const response = await request(app).post('/skills').send(newSkill);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe('Test Node.js');
    skillId = response.body.id; 
  });

  test('POST /skills - Gagal jika field title kosong (Edge Case)', async () => {
    const invalidSkill = { title: '', percentage: 90 };
    const response = await request(app).post('/skills').send(invalidSkill);

    expect(response.statusCode).toBe(400);
  });

  // ==========================================================
  // 3 & 4. ENDPOINT: GET /skills (Ambil Semua Data Skill)
  // ==========================================================
  test('GET /skills - Berhasil mengambil semua daftar skill (Happy Path)', async () => {
    const response = await request(app).get('/skills');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('GET /skills - Format struktur data item skill harus konsisten', async () => {
    const response = await request(app).get('/skills');

    expect(response.statusCode).toBe(200);
    if (response.body.length > 0) {
      expect(response.body[0]).toHaveProperty('id');
      expect(response.body[0]).toHaveProperty('title');
    }
  });

  // ==========================================================
  // 5 & 6. ENDPOINT: GET /skills/:id (Ambil Data by ID)
  // ==========================================================
  test('GET /skills/:id - Berhasil mengambil data skill berdasarkan ID (Happy Path)', async () => {
    const response = await request(app).get(`/skills/${skillId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id', skillId);
  });

  test('GET /skills/:id - Mengembalikan 404 jika ID fiktif (Edge Case)', async () => {
    const response = await request(app).get('/skills/999999');

    expect(response.statusCode).toBe(404);
  });

  // ==========================================================
  // 7 & 8. ENDPOINT: PUT /skills/:id (Update Data Skill)
  // ==========================================================
  test('PUT /skills/:id - Berhasil memperbarui data skill (Happy Path)', async () => {
    const updatedData = { title: 'Test React.js Diperbarui', percentage: 95 };
    const response = await request(app).put(`/skills/${skillId}`).send(updatedData);

    expect(response.statusCode).toBe(200);
  });

  test('PUT /skills/:id - Mengembalikan 400 jika payload data kosong (Edge Case)', async () => {
    const response = await request(app).put(`/skills/${skillId}`).send({ title: '' });

    expect(response.statusCode).toBe(400);
  });

  // ==========================================================
  // 9 & 10. ENDPOINT: DELETE /skills/:id (Hapus Data Skill)
  // ==========================================================
  test('DELETE /skills/:id - Berhasil menghapus data skill berdasarkan ID (Happy Path)', async () => {
    const response = await request(app).delete(`/skills/${skillId}`);

    expect(response.statusCode).toBe(200);
  });

  test('DELETE /skills/:id - Mengembalikan 404 jika mencoba menghapus ID yang tidak ada (Edge Case)', async () => {
    const response = await request(app).delete('/skills/999999');

    expect(response.statusCode).toBe(404);
  });
});