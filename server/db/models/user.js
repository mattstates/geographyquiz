const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: { type: String, trim: true, required: 'Please include a username.' },
    userEmail: { type: String, trim: true, required: 'Please include an email address.' },
    lastLogin: Date,
    createdDate: Date,
    scores: Array,
    accountType: Number,
    classes: Array
});

userSchema.pre('save', function (next) {
    if (!this.createdDate) {
        this.createdDate = Date.now();
    }
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
