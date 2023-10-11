require("dotenv").config();

const express = require("express");
const session = require("express-session");
 const route = require("./controllers");
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(route)

// const sess = {
//     secret: process.env.SESSIONSECRET,
//     cookie: {},
//     resave: false,
//     saveUninitialized: false,
//     store: new SequelizeStore({
//         db: sequelize
//     })
//};

const init = async () => {
    await sequelize.sync ({force: true}) 
       app.listen(PORT, () => console.log(`Application is listening on port ${PORT}`)) 
}

init();