const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const favicon = require('serve-favicon');
const path = require('path');

app.use(express.static('dist'));
app.use(express.static('maps'));
app.use(favicon(path.join(__dirname, 'favicon.ico')));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', (req, res) => res.send('index.html'));

app.get('/maps/world', (req, res) => {

    res.sendFile('/server/maps/world-countries-sans-antarctica.json', { root: __dirname });

});

app.get('/maps/usa', (req, res) => {

    res.sendFile('/server/maps/us-albers.json', { root: __dirname });

});

app.get('/getMaps', (req, res) => {
    res.json({ mapsList: ['world'] });
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
