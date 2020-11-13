'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please fill your username'
        }
      }
    },
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  
  User.addHook('beforeCreate', (user) => {
    user.score = 0
  })
  return User;
};