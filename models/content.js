const { Models, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Content extends Models {}

Content.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    resident: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    retailer: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    post_comment: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },

    tests_available: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tests_seeking: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    contact_me: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "content",
  }
);

module.exports = Content;
