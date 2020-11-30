const fetch = require("node-fetch");

module.exports = async (url, params) => {
	// convert params structure to query string
	let query = "";
	for(let p in params)
		query += `&${p}=${params[p]}`;

	// get data
	let response = await fetch(`${url}?${query.replace("&", "")}`);
	if (!response.ok) return null;

	return await response.json();
};