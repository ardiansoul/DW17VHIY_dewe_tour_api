"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      trip.hasMany(models.transaction, { as: "transactions" });
      trip.belongsTo(models.country, {
        foreignKey: "countryId",
        as: "country",
      });
    }
  }
  trip.init(
    {
      title: DataTypes.STRING,
      countryId: DataTypes.INTEGER,
      accommodation: DataTypes.STRING,
      transportation: DataTypes.STRING,
      eat: DataTypes.STRING,
      day: DataTypes.INTEGER,
      night: DataTypes.INTEGER,
      dateTrip: DataTypes.STRING,
      price: DataTypes.INTEGER,
      quota: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      image: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "trip",
    }
  );
  return trip;
};
