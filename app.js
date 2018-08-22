const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const schedule = require('node-schedule');
const sequelize = require('./src/config/database');
const fs = require('fs');

const sessionConfig = require('./src/config/session');

//models
const Meme = require('./src/models/meme');
const Vote = require('./src/models/vote');

//routes
const mainRoutes = require('./src/routes/index');
const authRoutes = require('./src/routes/auth');
const registerRoutes = require('./src/routes/register');
const apiRoutes = require('./src/routes/api');
const addMemeRoutes = require('./src/routes/addMeme');
const memeApiRoutes = require('./src/routes/memeApi');
const voteRoutes = require('./src/routes/vote');
const profileRoutes = require('./src/routes/profile');

app.use(`/dist`, express.static(__dirname + "/dist"));
app.use(`/static`, express.static(__dirname + "/static"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session(sessionConfig));

app.use(`/`, mainRoutes);
app.use(`/auth`, authRoutes);
app.use(`/register`, registerRoutes);
app.use(`/add`, addMemeRoutes);
app.use(`/profile`, profileRoutes);

app.use(`/api`, apiRoutes);
app.use(`/api`, memeApiRoutes);
app.use(`/api/vote`, voteRoutes);


//job which every minute deletes meme which is older than 1 hour.


app.listen(8081, () => {
  console.log('Hello! MEMEnto-mori app listening on port 8081');
});

module.exports = app;



