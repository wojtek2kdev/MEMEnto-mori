const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const fileUpload = require('express-fileupload');

const sessionConfig = require('./src/config/session');

//routes
const mainRoutes = require('./src/routes/index');
const authRoutes = require('./src/routes/auth');
const registerRoutes = require('./src/routes/register');
const apiRoutes = require('./src/routes/api');
const addMemeRoutes = require('./src/routes/addMeme');

app.use(`/dist`, express.static(__dirname + "/dist"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

app.use(session(sessionConfig));

app.use(`/`, mainRoutes);
app.use(`/auth`, authRoutes);
app.use(`/register`, registerRoutes);
app.use(`/add`, addMemeRoutes);

app.use(`/api`, apiRoutes);

app.listen(8081, () => {
  console.log('Hello! MEMEnto-mori app listening on port 8081');
});



