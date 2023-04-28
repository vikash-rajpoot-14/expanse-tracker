const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DB, "root", process.env.PASSWORD, {
  dialect: "mysql",
  host: "54.235.31.212",
});

module.exports = sequelize;
