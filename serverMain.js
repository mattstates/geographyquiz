require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const favicon = require('serve-favicon');
const path = require('path');
const db = require('./server/db/database.js');
const routes = require('./server/routes/routes.js');
const passport = require('passport');

function enforceHttps(req, res, next) {
    if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV === 'production') {
        res.redirect(301, `https://${req.get('host')}${req.url}`);
    } else {
        return next();
    }
}

app.use(enforceHttps);
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(
    require('express-session')({
        secret: process.env.EXPRESS_SESSION_SECRET,
        resave: true,
        saveUninitialized: true
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('dist'));
app.use(favicon(path.join(__dirname, '/server/favicon.ico')));

// app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });
app.use('/', routes);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
