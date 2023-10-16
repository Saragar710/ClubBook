require("dotenv").config();
const session = require('express-session');
const express = require("express");
const route = require("./controllers");

const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;


const sess = {
    secret: procces.env.SESSIONSECRET,
    cookie: {
      maxAge: 300000,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true    
  };

app.use(express.static("public"));
app.use(express.static("views"));

app.use(route)

const init = async () => {
    await sequelize.sync ({force: true}) 
       app.listen(PORT, () => console.log(`Application is listening on port ${PORT}`)) 
}

init();