/* Configuration params. */
const ROUTES = require('./routes.js');
const mongo = require('./mongo.js').mongo;

/* Environment variables. */
const PORT = process.env.PORT || 1337;
const QUEUE = process.env.QUEUE_NAME || 'test';
const RABBITUSER = process.env.RABBIT_USERNAME || 'DAS';
const RABBITPASSWORD = process.env.RABBIT_PASSWORD || 'sistemas';
const RABBITHOST = process.env.RABBIT_HOST || 'localhost';
const RABBITPORT = process.env.RABBIT_PORT || 5672;

module.exports = {
    PORT,
    ROUTES,
    QUEUE,
    RABBITUSER,
    RABBITPASSWORD,
    RABBITHOST,
    RABBITPORT,
    mongo
}