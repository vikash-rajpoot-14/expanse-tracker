const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DB, "root", process.env.PASSWORD, {
  dialect: "mysql",
  host: "3.87.145.123",
});

module.exports = sequelize;
