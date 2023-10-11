require('dotenv').config();
const Sequelize = require('sequelize');


let sequelize = new Sequelize(process.env.MYSQLURI);



module.exports = sequelize;