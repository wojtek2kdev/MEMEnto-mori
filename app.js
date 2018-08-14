const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const schedule = require('node-schedule');
const sequelize = require('./src/config/database');

const sessionConfig = require('./src/config/session');

//models
const Meme = require('./src/models/meme');

//routes
const mainRoutes = require('./src/routes/index');
const authRoutes = require('./src/routes/auth');
const registerRoutes = require('./src/routes/register');
const apiRoutes = require('./src/routes/api');
const addMemeRoutes = require('./src/routes/addMeme');

app.use(`/dist`, express.static(__dirname + "/dist"));
app.use(`/static`, express.static(__dirname + "/static"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session(sessionConfig));

app.use(`/`, mainRoutes);
app.use(`/auth`, authRoutes);
app.use(`/register`, registerRoutes);
app.use(`/add`, addMemeRoutes);

app.use(`/api`, apiRoutes);


//job which every minute deletes meme which is older than 1 hour.
schedule.scheduleJob({rule: '* */1 * * * *'}, async () => {
  await Meme.destroy({
    where: sequelize.literal(`created_at < now() - interval '1 hour'`)
  })
});

app.listen(8081, () => {
  console.log('Hello! MEMEnto-mori app listening on port 8081');
});



