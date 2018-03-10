const User = require('../models/user.js');

exports.createUser = async (req, res) => {
    console.log('route hit')
    console.log(req);
    try {
        // Take user data from the form and sanitize it, then send it to the createUser function.
        // TODO: Sanitize
        await User.createUser(
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                userEmail: req.body.email
            }
        );
        res.send('saved fo sho');

    } catch (err) {
        res.send(err.message)
    }
};
