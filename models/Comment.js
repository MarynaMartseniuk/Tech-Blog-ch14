const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');
const dayjs = require('dayjs');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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
    post_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'post',
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
    modelName: 'comment',
  }
);

module.exports = Comment;