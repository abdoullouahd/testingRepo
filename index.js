const express = require('express');
//const route1 = require('./route1');
const app = express();
const route2 = require('./route1.js')

app.use('/test',express.static(__dirname + '/public'));

app.use('/route2',route2);

app.get('/', (req, res) => {
    
    res.send('hello '  );
});

app.listen(5000, () => {
    console.log('listening on port 5000 .....');
});