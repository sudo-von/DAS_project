const fetch = require("./fetch");

module.exports = async () => {
	let songs = await fetch(
		"https://vocadb.net/api/songs",
		{
			songTypes: "Original",
			includeMembers: true,
			onlyWithPvs: true,
			pvServices: "Youtube",
			maxResults: 20,
			sort: "RatingScore",
			fields: "PVs,MainPicture"
		}
	);

	if (!songs) return [];

	// filter API data
	let data = [];
	for(let s of songs.items) {
		let pv = s.pvs.find(p => p.service == "Youtube");
		if(!pv) // service not found
			continue;

		data.push({
			id:					s.id,
			publishDate:		s.publishDate,
			name:				s.defaultName,
			duration:			s.lengthSeconds,
			url:				pv.url,
			picture:			s.mainPicture.urlThumb,
			ranking: {
				favorited:		s.favoritedTimes,
				score:			s.ratingScore
			},
			author: {
				name:			pv.author,
				artists:		s.artistString
			}
		});
	}

	return data; // return formatted data
}