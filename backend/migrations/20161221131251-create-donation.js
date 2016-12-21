'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Donations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      message: {
        type: Sequelize.TEXT
      },
      donor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      charity_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Charities',
          key: 'id'
        }
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Donations');
  }
};
