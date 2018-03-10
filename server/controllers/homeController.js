const path = require('path');
const distPath = path.normalize(__dirname + '/../../dist');

exports.home = (req, res) => {
    res.sendFile('index.html', { root: distPath });
}