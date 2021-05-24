const Sequelize = require("sequelize");
const dbConfig = require("../../configs/database");

const sequelize = new Sequelize(
  dbConfig.DB_NAME,
  dbConfig.DB_USER,
  dbConfig.DB_PASSWORD,
  {
    dialect: dbConfig.DB_CLIENT,
    host: dbConfig.DB_HOST,
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);

module.exports = sequelize;
