const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, trim: true, required: 'Please include your first name.' },
    lastName: { type: String, trim: true, required: 'Please include your last name.' },
    userEmail: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        required: 'Please include an email address.',
        validate: {
            validator: function(email) {
                return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
                    email
                );
            },
            message: '{VALUE} is not a valid email address. EX: username@example.com'
        }
    },
    googleId: String,
    lastLogin: Date,
    createdDate: Date,
    scores: Array,
    accountType: Number, // 0 = student, 1 = teacher
    classes: Array,
    googleInfo: {
        photos: String,
        gender: String,
        _json: Object
    }
});

userSchema.pre('save', function(next) {
    if (!this.createdDate) {
        this.createdDate = Date.now();
    }
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
