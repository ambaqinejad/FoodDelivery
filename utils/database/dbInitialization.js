const Sequelize = require("sequelize");
const dbConfig = require("../../configs/database");

const sequelize = new Sequelize(
  dbConfig.DB_NAME,
  dbConfig.DB_USER,
  dbConfig.DB_PASSWORD,
  {
    dialect: dbConfig.DB_CLIENT,
    host: dbConfig.DB_HOST,
  }
);

module.exports = sequelize;
