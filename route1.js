const express = require('express');
const route2 = express.Router();

route2.get('/',(req,res)=>{
    res.send('hello from route1');
});

module.exports = route2;
