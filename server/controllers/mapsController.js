const path = require('path');
const mapPath = path.normalize(__dirname + '/../assets/maps');
exports.world = (req, res) => {
    res.sendFile('/world-countries-sans-antarctica.json', { root: mapPath });
}

// app.get('/maps/world', (req, res) => {

//     res.sendFile('/server/assets/maps/world-countries-sans-antarctica.json', { root: __dirname });

// });