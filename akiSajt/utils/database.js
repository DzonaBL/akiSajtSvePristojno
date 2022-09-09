const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "aki.sqlite",
});

module.exports = sequelize;
