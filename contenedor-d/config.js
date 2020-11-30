const routes = require('./routes.js');
const mongo = require('./mongo.js').mongo;
////////

var PORT = process.env.PORT || 1337;

module.exports = {

    PORT: PORT,
    ROUTES: routes,
    NOENCONTRADO: "404",
    
    mongo: mongo
    // rabbit: rabbit
}