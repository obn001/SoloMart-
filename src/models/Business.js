const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const Business = sequelize.define("Business", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  description: DataTypes.TEXT,
  address: DataTypes.TEXT,
});

User.hasMany(Business, { foreignKey: "owner_id" });
Business.belongsTo(User, { foreignKey: "owner_id" });

module.exports = Business;
