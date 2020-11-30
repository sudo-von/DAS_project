const getSongs = require("./modules/songs");

// init scrapper
(async () => {
	console.log(await getSongs()); // get songs
})();