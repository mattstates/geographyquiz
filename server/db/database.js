require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', (err) => console.error(err.message));
module.exports = db;