const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool();

pool.connect()
  .then(client => {
    console.log('Connected to PostgreSQL database');
    client.release();
  })
  .catch(err => {
    console.error('Failed to connect to PostgreSQL database:', err);
    process.exit(1);
  });

module.exports = pool;