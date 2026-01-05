const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Business = require("./Business");

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: DataTypes.TEXT,
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  stock_quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  is_available: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  image_url: DataTypes.TEXT,
});

Business.hasMany(Product, { foreignKey: "business_id" });
Product.belongsTo(Business, { foreignKey: "business_id" });

module.exports = Product;
