'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pointers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pointers.init({
    name: DataTypes.TEXT,
    coordinates: DataTypes.INTEGER,
    pics: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Pointers',
  });
  return Pointers;
};