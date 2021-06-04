const fetch = require("./fetch");

module.exports = async id => {
	// get comments
	let comments = await fetch(`https://vocadb.net/api/songs/${id}/comments`);
	if (!comments)
		return [];

	// filter API data
	let data = [];
	comments.forEach(c => {
		if(!c.author.mainPicture) return;

		data.push({
			created:			c.created,
			message:			c.message,
			author: {
				name:			c.author.name,
				picture:		c.author.mainPicture.urlThumb,
				verified:		c.author.verifiedArtist,
				memberSince:	c.author.memberSince,
				active:			c.author.active,
				group:			c.author.groupId,
			}
		});
	});

	return data; // return formatted data
}