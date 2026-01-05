const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");
const Business = require("./Business");

const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  total_amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  payment_status: {
    type: DataTypes.ENUM("pending", "paid", "failed"),
    defaultValue: "pending",
  },
  order_status: {
    type: DataTypes.ENUM(
      "placed",
      "accepted",
      "preparing",
      "ready",
      "on_delivery",
      "delivered",
      "cancelled"
    ),
    defaultValue: "placed",
  },
  delivery_address: DataTypes.TEXT,
  latitude: DataTypes.DECIMAL,
  longitude: DataTypes.DECIMAL,
});

User.hasMany(Order, { foreignKey: "consumer_id" });
Order.belongsTo(User, { foreignKey: "consumer_id" });

Business.hasMany(Order, { foreignKey: "business_id" });
Order.belongsTo(Business, { foreignKey: "business_id" });

module.exports = Order;
