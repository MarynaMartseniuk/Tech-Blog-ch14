const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const dayjs = require('dayjs');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: function () {
        const nowDate = dayjs().format('DD/MM/YYYY');
        return nowDate;
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;