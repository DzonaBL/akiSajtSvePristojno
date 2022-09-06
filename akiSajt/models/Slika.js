const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const Slika = sequelize.define("slika", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  link: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slika: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Slika;
