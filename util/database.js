const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DB, "root", process.env.PASSWORD, {
  dialect: "mysql",
  host: "52.87.171.143",
});

module.exports = sequelize;
