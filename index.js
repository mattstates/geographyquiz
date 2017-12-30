const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('dist'));
app.use(express.static('maps'));

app.get('/', (req, res) => res.send('index.html'));

app.listen(PORT, () => console.log(`I am listening on ${PORT}`));