const mongoose = require('mongoose');
const User = require('../db/models/user.js');
const UserModel = mongoose.model('User');

exports.createUser = (userData) => {
    const { firstName, lastName, userEmail } = userData;
    const newUser = new UserModel({ firstName, lastName, userEmail });
    newUser.save();
};
