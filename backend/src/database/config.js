require('dotenv').config();

module.exports = {
  dialect: 'mysql',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'password',
  database: process.env.DB_NAME || 'clientes_db',
  host: process.env.DB_HOST || '127.0.0.1',
};
