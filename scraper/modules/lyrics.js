const fetch = require("./fetch");

module.exports = async id => {
	// get comments
	let lyrics = await fetch(`https://vocadb.net/api/songs/lyrics/${id}`);
	if (!lyrics)
		return null;

	// return formatted data
	return {
		lang:			lyrics.cultureCode,
		value:			lyrics.value,
		credits: {
			source:		lyrics.source,
			url:		lyrics.url
		}
	}
}