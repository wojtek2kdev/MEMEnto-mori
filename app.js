const express = require('express');
const app = express();
const path = require('path');

const routes = require('./src/routes/index');

app.use("/dist", express.static(__dirname + "/dist"));
app.use('/', routes);

app.listen(8081, () => {
  console.log('API listening on port 8081');
});