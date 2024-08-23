const { Sequelize } = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize({
  database: config.DB,
  username: config.USER,
  password: config.PASSWORD,
  dialect: config.DIALECT,
  dialectOptions: {
    connectString: `${config.HOST}:${config.PORT}/${config.SID}`
  },
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle
  }
});

module.exports = sequelize;
