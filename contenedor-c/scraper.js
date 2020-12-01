const { MongoDB }	= require("./modules/db");
const getSongs		= require("./modules/songs");
const getComments	= require("./modules/comments");
const getLyrics		= require("./modules/lyrics");
const getRatings	= require("./modules/ratings");

// init scrapper
(async () => {
	// check if needs to insert
	var db = new MongoDB();
	var exist = await db.existCollection();
	if (exist) return;

	var songs = await getSongs(); // get songs
	songs.forEach(async (s, k) => {
		// get individual data
		s.comments	= await getComments(s.id);
		s.lyrics	= await getLyrics(s.id);
		s.ratings	= await getRatings(s.id);

		// overwrite id
		s.id = k.toString();

		// insert into DB
		let db = new MongoDB();
		db.saveSong(s); // save song
	});
})();
