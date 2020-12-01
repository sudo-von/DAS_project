const express = require('express');
const cors = require('cors');
const config = require('./config');
const app = express();

/* Enabled cors. */
app.use(cors());
app.use(express.json());
/* Rotes. */
config.ROUTES(app, config.mongo);
/* Server listening... */
app.listen(config.PORT, function(){
    console.log(`Correctly listening to port ${ config.PORT }`);
});