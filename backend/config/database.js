import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

let sequelize;

// 🧠 Trik Pintar: Jika sedang berjalan di GitHub Actions (test), otomatis pakai SQLite memori
if (process.env.NODE_ENV === 'test' || process.env.DB_DIALECT === 'sqlite') {
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false, // agar log terminal GitHub bersih
    define: {
      timestamps: true // menjamin kolom createdAt dan updatedAt otomatis terbuat di SQLite
    }
  });

  // 🔥 Tambahan Kunci: Paksa sinkronisasi tabel database memori secara instan sebelum tes berjalan
  await sequelize.sync({ force: true }).catch(() => {});
} else {
  // 💻 Tetap gunakan MySQL XAMPP asli kamu saat dijalankan di laptop lokal (Development)
  sequelize = new Sequelize(
    process.env.DB_NAME || 'myporto_db',
    process.env.DB_USER || 'root',
    process.env.DB_PASSWORD || '',
    {
      host: process.env.DB_HOST || '127.0.0.1',
      dialect: 'mysql',
      port: process.env.DB_PORT || 3306,
      logging: false
    }
  );
}

export default sequelize;