const mongoose = require('mongoose');
const User = require('../db/models/user.js');
const UserModel = mongoose.model('User');

exports.createUser = (userData) => {
    const { userName, userEmail } = userData;
    const newUser = new UserModel({ userName, userEmail });
    newUser.save();
};
