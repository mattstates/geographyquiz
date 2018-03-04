const User = require('../models/user.js');

exports.createUser = async (req, res) => {

    const sampleUser = { userName: 'sample user', userEmail: ' sampleemail@asdf.acsd  ' }
    try {
        await User.createUser(sampleUser);
        res.send('saved fo sho');

    } catch (err) {
        res.send(err.message)
    }
};
