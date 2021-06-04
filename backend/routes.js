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
        var lyrics = await db.getSongLyrics(req.params.lyricsid.toString());
        if (!lyrics)res.send({"lyrics" : ""});
        res.send(lyrics);
    });
    
    app.get('/songs/:id/comments', async function (req, res) {
        var comments = await db.getSongComments(req.params.id.toString());
        if (!comments)res.send({"comments" : ""});
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
    
    app.post('/songs', async function(req, res){
        var id = await db.getLastId();
        const song = {
            "id": id,
            "publishDate": req.body.content,
            "name": req.body.name,
            "duration": req.body.duration,
            "url": req.body.url,
            "picture": req.body.picture,
            "type" : "",
            "ranking": {"favorited" : 0, "score" : 0},
            "author": {"name":req.body.authorname,"artists":""},
            "comments" : [],
            "lyrics" : "",
            "rating" : {"favorites": 0, "likes": 0}
        };
        
        var answr = await db.insertSong(song);
        res.send(answr);
    });

    app.post('/songs/:id/comments', async function(req, res){
        var id = await db.getLastCommentId();
        
        const comment = {
            "id": id,
            "content": req.body.content
        };
        
        var answr = await db.insertComment(comment);
        res.send(answr);
    });

}
