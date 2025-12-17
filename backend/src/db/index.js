import mysql from 'mysql2/promise'
import dotenv from "dotenv"
dotenv.config()

export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
});

export const initDB = async () => {
  try {
    // Create users table if it doesn't exist
    await db.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('users table ready');
  } catch (err) {
    console.error('Failed to initialize database:', err);
  }
};

export const testDB = async () => {
  try {
    await db.query("SELECT 1");
    console.log("MySQL connected");
    await initDB();
  } catch (err) {
    console.error("MySQL connection failed", err);
  }
};


