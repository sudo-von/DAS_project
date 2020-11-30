const fetch = require("./fetch");

const getSongs = async (url, defv, params = {}) => {
	let songs = await fetch(url, params); // fetch songs

	return !!songs ? songs : defv;
}

const getArtistSongs = async (url, artists, params) => {
	let songs = [];
	
	for(let a of artists) { // get each artist songs
		songs = songs.concat((await getSongs(
			url,
			{ items: [] },
			{
				artistId: a,
				artistParticipationStatus: "OnlyMainAlbums",
				... params
			}
		)).items);
		
	}

	return songs;
}

const getData = (songs, type) => {
	let data = [];

	songs.forEach(s => {
		let pv = s.pvs.find(p => p.service == "Youtube");
		if(!pv) // service not found
			return;

		data.push({
			id:					s.id,
			publishDate:		s.publishDate,
			name:				s.defaultName,
			duration:			s.lengthSeconds,
			url:				pv.url,
			picture:			s.mainPicture.urlThumb,
			type:				type,
			ranking: {
				favorited:		s.favoritedTimes,
				score:			s.ratingScore
			},
			author: {
				name:			pv.author,
				artists:		s.artistString
			}
		});
	});

	return data; // get data
}

module.exports = async () => {
	// get normal songs
	let songs = await getArtistSongs(
		"https://vocadb.net/api/songs",
		[
			45,			// DECO*27
			23981,		// Yunosuke
			885,		// Kairiki bear
			24092,		// KIRA
			10216,		// DIVELA
			38			// 八王子P
		],
		{
			songTypes:		"Original",
			includeMembers: true,
			onlyWithPvs:	true,
			pvServices:		"Youtube",
			maxResults:		4,
			sort:			"PublishDate",
			fields:			"PVs,MainPicture"
		}
	);

	// get highlighted songs
	let highlighteds = await getSongs(
		"https://vocadb.net/api/songs/highlighted",
		[],
		{
			fields: "PVs,MainPicture"
		}
	);

	// get top rated songs
	let topRated = await getSongs(
		"https://vocadb.net/api/songs/top-rated",
		[],
		{
			maxResults: 12,
			fields: "PVs,MainPicture"
		}
	);

	// return all songs with format
	return getData(songs, "Normal")
		.concat(getData(highlighteds, "Highlighted"))
		.concat(getData(topRated, "TopRated"));

}