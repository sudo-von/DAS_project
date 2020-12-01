const util = require('util');
const express = require('express');
const cors = require('cors');
//////////////////////////////////////////

const app = express();

app.use(cors());
app.use(express.json());

app.listen(1388, function(){
    console.log(`Correctly listening to port ${1388}`);
});