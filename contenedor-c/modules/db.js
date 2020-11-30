const mongo = require("mongodb");

const MONGO_USERNAME	= process.env.MONGO_USERNAME;
const MONGO_PASSWORD	= process.env.MONGO_PASSWORD;
const MONGO_HOSTNAME	= process.env.MONGO_HOSTNAME;
const MONGO_PORT		= process.env.MONGO_PORT;
const MONGO_DATABASE	= process.env.MONGO_DATABASE;

class ISave {
	constructor() { }

	saveSong(song) {
		throw new Error("saveSong is not implemented.");
	}
}

class MongoDB extends ISave {
	constructor() {
		super();

		// connect to Mongo DB
		this.client = new mongo.MongoClient(
			`mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/`,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true
			}
		);
	}
	
	async saveSong(song) {
		await this.client.connect(); // connect to DB
		var db = this.client.db(MONGO_DATABASE);
		
		console.log( // insert the song and print the result
			await db.collection("songs").insertOne(song)
		);

		await this.client.close(); // waits to close the connection
	}
}

module.exports = {
	MongoDB
}