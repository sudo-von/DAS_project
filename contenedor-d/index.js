const util = require('util');
const express = require('express');

const config = require('./config');
//////////////////////////////////////////

const app = express();

config.ROUTES(app, config.mongo);

app.listen(config.PORT, function(){
    console.log(`Correctly listening to port ${ config.PORT }`);
});