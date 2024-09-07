const sequelize = require('../config/connections');
const { User, Comment, Post } = require('../models');

const userData = require('./userSeeds.json');
const postData = require('./postSeeds.json');
const commentData = require('./commentSeeds.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();