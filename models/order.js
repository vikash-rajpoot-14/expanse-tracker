const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Order = sequelize.define("order", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: true,
    autoIncrement: true,
    primaryKey: true,
  },
  orderid: Sequelize.STRING,
  paymentId: Sequelize.STRING,
  status: Sequelize.STRING,
});

module.exports = Order;
