const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Retailer extends Model {}

Retailer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    retailer_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  
    tests_available: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    zip_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "retailer",
  }
);

module.exports = Retailer;