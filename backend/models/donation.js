'use strict';
module.exports = function(sequelize, DataTypes) {
  var Donation = sequelize.define('Donation', {
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    message: DataTypes.TEXT,
    donor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    charity_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'charities',
        key: 'id'
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Donation;
};
