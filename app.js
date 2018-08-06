const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

const sessionConfig = require('./src/config/session');

//routes
const mainRoutes = require('./src/routes/index');
const loginRoutes = require('./src/routes/login');
const registerRoutes = require('./src/routes/register');
const apiRoutes = require('./src/routes/api');

app.use(`/dist`, express.static(__dirname + "/dist"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session(sessionConfig));

app.use(`/`, mainRoutes);
app.use(`/login`, loginRoutes);
app.use(`/register`, registerRoutes);

app.use(`/api`, apiRoutes);

app.listen(8081, () => {
  console.log('Hello! MEMEnto-mori app listening on port 8081');
});



