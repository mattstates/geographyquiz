const path = require('path');
const mapPath = path.normalize(__dirname + '/../assets/maps');
exports.world = (req, res) => {
    res.sendFile('/world-countries-sans-antarctica.json', { root: mapPath });
};