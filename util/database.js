const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DB, "root", process.env.PASSWORD, {
  dialect: "mysql",
  host: "3.216.155.206",
});

module.exports = sequelize;
//3.216.155.206
