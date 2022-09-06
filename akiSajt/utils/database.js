const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "root/akiMamun/akiSajt/aki.slite",
});

module.exports = sequelize;
