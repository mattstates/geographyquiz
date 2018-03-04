require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', (err) => console.error(err.message));
module.exports = db;