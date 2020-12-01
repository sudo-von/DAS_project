const routes = require('./routes.js');
const mongo = require('./mongo.js').mongo;
////////

const PORT = process.env.PORT || 1337;
const QUEUE = process.env.QUEUE_NAME;
const RABBITUSER = process.env.RABBIT_USERNAME;
const RABBITPASSWORD = process.env.RABBIT_PASSWORD;
const RABITHOST = process.env.RABBIT_HOST;
const RABBITPORT = process.env.RABBIT_PORT;

module.exports = {

    PORT: PORT,
    ROUTES: routes,
    NOENCONTRADO: "404",
    
    QUEUE : QUEUE,
    RABBITUSER: RABBITUSER,
    RABBITPASSWORD: RABBITPASSWORD,
    RABBITHOST: RABITHOST,
    RABBITPORT: RABBITPORT,

    mongo: mongo
    // rabbit: rabbit
}