const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  role: {
    type: DataTypes.ENUM("producer", "consumer", "driver", "admin"),
    allowNull: false,
  },
  full_name: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password_hash: DataTypes.TEXT,
});

module.exports = User;
