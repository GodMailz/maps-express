'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Points', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      coordinatesX: {
        type: Sequelize.FLOAT
      },
      coordinatesY: {
        type: Sequelize.FLOAT
      },
      coordinatesX1: {
        type: Sequelize.FLOAT
      },
      coordinatesY1: {
        type: Sequelize.FLOAT
      },
      near: {
        type: Sequelize.TEXT
      },
      pics: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Points');
  }
};