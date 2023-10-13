// require('dotenv').config();
// const Sequelize = require('sequelize');


// // let sequelize = new Sequelize(process.env.MYSQLURI);

// let sequelize = {
//     "development": {
//         "username": process.env.DATABASE_USER,
//         "password": process.env.DATABASE_PASSWORD,
//         "database": process.env.DATABASE_NAME,
//         "host": process.env.DATABASE_HOST,
//         "dialect": 'postgres',
//         }
// }

// module.exports = sequelize;
const Sequelize = require('sequelize');
require('dotenv').config();
let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}
module.exports = sequelize;