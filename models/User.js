const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      // Use the beforeCreate hook to work with data before a new instance is created
      beforeCreate: async (newUserData) => {
        // In this case, we are taking the user's email address, and making all letters lower case before adding it to the database.
        newUserData.username = await newUserData.username.toLowerCase();
        return newUserData;
      },
      // Here, we use the beforeUpdate hook to make all of the characters lower case in an updated email address, before updating the database.
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.username = await updatedUserData.username.toLowerCase();
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;