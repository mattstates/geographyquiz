const path = require('path');
const distPath = path.normalize(__dirname + '/../../dist');
const imagePath = path.normalize(__dirname + '/../assets/images');


exports.home = (req, res) => {
    res.sendFile('index.html', { root: distPath });
}

exports.images = (req, res) => {
    console.log(req);
    res.sendFile(req.params.file, { root: imagePath });
}