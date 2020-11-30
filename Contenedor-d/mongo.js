const interfce = require('./interface.js').IDatabase;
const { MongoClient } = require("mongodb");

const DBPORT = process.env.MONGO_PORT || 27017;
const DBNAME = process.env.DBNAME || "OrdinarioDAS";
const DBHOST = process.env.MONGO_HOSTNAME || "localhost";
const DBUSERNAME = process.env.MONGO_USERNAME || "";
const DBPASSWORD = process.env.MONGO_PASSWORD || "";


class mongo extends interfce{
    constructor(){
        super();
        if(DBUSERNAME != "" || DBPASSWORD != "") this.url = `mongodb://${ DBUSERNAME }:${ DBPASSWORD }@${ DBHOST }:${ DBPORT }`;
        else this.url = `mongodb://${ DBHOST }:${ DBPORT }`;
        
        this.client = new MongoClient(this.url, {useNewUrlParser: true, useUnifiedTopology: true});
        this.client.connect();
        this.db = this.client.db(DBNAME);
        this.collection = this.db.collection("songs");
    }

    async getSongList(){
    return await this.collection.find().toArray();
    };

    async getSongLyrics(idGiven){
        idGiven = parseInt(idGiven, 10);
        return await this.collection.findOne({id: idGiven}, {projection: {lyrics: 1, _id: 0}});
    };

    async getSongComments(idGiven){
        idGiven = parseInt(idGiven, 10);
        return await this.collection.findOne({id: idGiven}, {projection: {comments: 1, _id: 0}});
    }

    async getHighlightedSongs(){
        return await this.collection.find({type: "Highlighted"}).toArray();
    }

    async getTopRatedSongs(){
        return await this.collection.find({type: "TopRated"}).toArray();
    }
};

module.exports = { mongo }