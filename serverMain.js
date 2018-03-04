require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const favicon = require('serve-favicon');
const path = require('path');
const db = require('./server/db/database.js');
const routes = require('./server/routes/routes.js');

app.use(express.static('dist'));

app.use(favicon(path.join(__dirname, '/server/favicon.ico')));

// app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });
app.use('/', routes);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));