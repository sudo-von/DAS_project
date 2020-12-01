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
        return await this.collection.findOne({id: idGiven},{"lyrics": 1});
    };

    async getSongComments(idGiven){
        return await this.collection.findOne({id: idGiven},{"comments": 1});
    };

    async getHighlightedSongs(){
        return await this.collection.find({type: "Highlighted"}).toArray();
    };

    async getTopRatedSongs(){
        return await this.collection.find({type: "TopRated"}).toArray();
    };

    async insertSong(song){
        const returnedObject = { message: "The song has been successfully stored" }

        try {
            await this.collection.insertOne(song);
        } catch(error){
            returnedObject.message = "Something went wrong"
            
            return returnedObject
        }

       return returnedObject
    };

    async insertSongComment(idGiven, comment){
        const returnedObject = { message: "The song has been successfully stored" }

        idGiven = parseInt(idGiven, 10);



        const filter = { id: idGiven };
        const querySpecs = { 
                                $push: {
                                    "comments": {id: comment.id , content: comment.content}
                                }
                            };
        
        try {
            await this.collection.updateOne(filter, querySpecs);
        } catch(error){
            returnedObject.message = "Something went wrong";

            return returnedObject;
        }

       return returnedObject;
    }

    async getLastId(){
        return await this.collection.countDocuments();
    }

    async getLastCommentId(idGiven){

        idGiven = parseInt(idGiven, 10);

        const pipeline = [ 
            {
                $match: {id: idGiven}
            }, 
            {
                $project: 
                    {count:
                        {$cond: {if: {$isArray: "$comments"}, then: 
                            {$size: "$comments" }, 
                                else: -1} 
                            }
                        }
                    } 
        ]

        return await this.collection.aggregate(pipeline).toArray();
    }
};

module.exports = { mongo }