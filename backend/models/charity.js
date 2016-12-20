'use strict';
module.exports = function(sequelize, DataTypes) {
  var charity = sequelize.define('Charity', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    logoURL: {
      type: DataTypes.STRING,
      unique: true
    },
    description: {
      type: DataTypes.TEXT
    },
    employeeCount: {
      type: DataTypes.INTEGER
    },
    areasServed: {
      type: DataTypes.STRING,
      allowNull: false
    },
    endowment: {
      type: DataTypes.INTEGER // this could cause a problem
    },
    foundedAt: {
      type: DataTypes.DATE
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return charity;
};
