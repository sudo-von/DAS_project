const fetch = require("./fetch");

module.exports = async id => {
	// get ratings
	let ratings = await fetch(
		`https://vocadb.net/api/songs/${id}/ratings`,
		{
			userFields: "None"
		}
	);
	if (!ratings)
		return null;

	// get count of favorites and likes
	let favorites = ratings.filter(r => r.rating == "Favorite").length;
	let likes = ratings.length - favorites;

	// return formatted data
	return {
		favorites, 
		likes
	}
}