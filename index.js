const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081;


app.use(express.static('dist'));
app.use(express.static('maps'));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', (req, res) => res.send('index.html'));
app.get('/maps/*', (req, res) => {
    console.log(req.url);
    res.sendFile('/maps/world-countries-sans-antarctica.json', { root: __dirname });
    //console.log(JSON.stringify({ test: 'this is a test' }));
    //res.send(JSON.stringify({ test: 'this is a test' }));

});

app.listen(PORT, () => console.log(`I am listening on ${PORT}`));
