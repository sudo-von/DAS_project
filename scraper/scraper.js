const getSongs		= require("./modules/songs");
const getComments	= require("./modules/comments");
const getLyrics		= require("./modules/lyrics");
const getRatings	= require("./modules/ratings");

// init scrapper
(async () => {
	var songs = await getSongs(); // get songs

	songs.forEach(async s => {
		s.comments	= await getComments(s.id);
		s.lyrics	= await getLyrics(s.id);
		s.ratings	= await getRatings(s.id);

		console.log(s); // INSERT INTO MONGO DB
	});
})();
