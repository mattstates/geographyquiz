const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../db/models/user.js');

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL
        },
        function(accessToken, refreshToken, response, cb) {
            const emailAddress = response.emails.filter((email) => email.type === 'account')[0].value;
            User.findOne(
                {
                    userEmail: emailAddress
                },
                function(err, user) {
                    if (err) {
                        return cb(err);
                    }
                    if (!user) {
                        user = new User({
                            firstName: response.name.givenName,
                            lastName: response.name.familyName,
                            userEmail: emailAddress,
                            googleId: response.id,
                            googleInfo: {
                                gender: response.gender,
                                photos: response.photos[0].value,
                                _json: response._json
                            }
                        });
                        user.save(function(err) {
                            if (err) {
                                console.log(err);
                            }
                            return cb(err, user);
                        });
                    } else {
                        return cb(err, user);
                    }
                }
            );
        }
    )
);

passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

// use for login
exports.googleLogin = passport.authenticate('google', { scope: ['profile', 'email'] });

// call back endpoint
exports.googleCallbackMW = passport.authenticate('google', { failureRedirect: '/login' });

exports.googleCallback = (req, res) => {
    // TODO: Remove this.
    res.redirect('/');
};

exports.googleSuccess = (req, res) => {
    res.redirect('/game');
}
