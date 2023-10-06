require("dotenv").config();

const express = require("express");
const session = require("express-session");
const route = require("./controllers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-seesion-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

