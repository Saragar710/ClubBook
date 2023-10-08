require("dotenv").config();

const express = require("express");
const session = require("express-session");
 const route = require("./controllers");
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const sequelize = require("./config/connection");
const { Sequelize } = require("sequelize");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const sess = {
    secret: process.env.SESSIONSECRET,
    cookie: {},
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: sequelize
    })
};