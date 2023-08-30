'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Point extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Point.init({
    name: DataTypes.STRING,
    coordinatesX: DataTypes.FLOAT,
    coordinatesY: DataTypes.FLOAT,
    coordinatesX1: DataTypes.FLOAT,
    coordinatesY1: DataTypes.FLOAT,
    near: DataTypes.TEXT,
    pics: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Point',
  });
  return Point;
};