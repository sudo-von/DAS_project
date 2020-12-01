const mongo = require("mongodb");

const MONGO_USERNAME	= process.env.MONGO_USERNAME;
const MONGO_PASSWORD	= process.env.MONGO_PASSWORD;
const MONGO_HOSTNAME	= process.env.MONGO_HOSTNAME;
const MONGO_PORT		= process.env.MONGO_PORT;
const MONGO_DATABASE	= process.env.MONGO_DB;
const MONGO_COLLECTION	= "songs";

class ISave {
	constructor() { }

	saveSong(song) {
		throw new Error("saveSong is not implemented.");
	}

	existCollection() {
		throw new Error("saveSong is not implemented.");
	}
}

class MongoDB extends ISave {
	constructor() {
		super();

		// connect to Mongo DB
		this.client = new mongo.MongoClient(
			`mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/`,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true
			}
		);
	}
	
	async saveSong(song) {
		await this.client.connect(); // connect to DB
		var db = this.client.db(MONGO_DATABASE);
		
		// insert the song and print a message
		await db.collection(MONGO_COLLECTION).insertOne(song);
		console.log("Item inserted.");

		await this.client.close(); // waits to close the connection
	}

	async existCollection() {
		await this.client.connect(); // connect to DB
		const collections = await this.client.db(MONGO_DATABASE).listCollections().toArray();
		
		try {
			// find MONGO_COLLECTION into DB
			return collections.find(c => c.name == MONGO_COLLECTION);
		}
		finally {
			await this.client.close(); // waits to close the connection
		}
	}
}

module.exports = {
	MongoDB
}