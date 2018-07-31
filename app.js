const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

//routes
const mainRoutes = require('./src/routes/index');
const loginRoutes = require('./src/routes/login');
const registerRoutes = require('./src/routes/register');

app.use(`/dist`, express.static(__dirname + "/dist"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(`/`, mainRoutes);
app.use(`/login`, loginRoutes);
app.use(`/register`, registerRoutes);

app.listen(8081, () => {
  console.log('Hello! MEMEnto-mori app listening on port 8081');
});



