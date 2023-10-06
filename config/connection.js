const Sequelize = require('sequelize');

const URI = process.env.SQLURI;

const sequelize = new Sequelize(URI);

module.exports = sequelize;