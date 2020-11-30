const config = require("./config.js");

module.exports = function(app, database){
    var db = new database()

    app.get('/', function (req, res) {
        res.send('DAS')

    });

    app.get('/songs', async function (req, res) {
        var songs = await db.getSongList();

        res.send(songs);
    });

    app.get('/songs/lyrics/:lyricsid', async function (req, res) {
        var lyrics = await db.getSongLyrics(req.params.lyricsid) || config.NOENCONTRADO;
        if (!lyrics)res.send(config.NOENCONTRADO);

        res.send(lyrics);
    });
    
    app.get('/songs/:id/comments', async function (req, res) {
        var comments = await db.getSongComments(req.params.id);
        if (!comments)res.send(config.NOENCONTRADO);

        res.send(comments);
    });

    app.get('/songs/highlighted', async function (req, res) {
        var comments = await db.getHighlightedSongs(req.params.id);
        if (!comments)res.send(config.NOENCONTRADO);

        res.send(comments);
    });

    app.get('/songs/toprated', async function (req, res) {
        var comments = await db.getTopRatedSongs(req.params.id);
        if (!comments)res.send(config.NOENCONTRADO);

        res.send(comments);
    });
}