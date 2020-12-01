const config = require("./config.js");
const amqplib = require("amqplib");

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
        var comments = await db.getSongComments(req.params.id) || config.NOENCONTRADO;
        if (!comments)res.send(config.NOENCONTRADO);

        res.send(comments);
    });

    app.get('/songs/highlighted', async function (req, res) {
        var comments = await db.getHighlightedSongs(req.params.id) || config.NOENCONTRADO;
        if (!comments)res.send(config.NOENCONTRADO);

        res.send(comments);
    });

    app.get('/songs/toprated', async function (req, res) {
        var comments = await db.getTopRatedSongs(req.params.id) || config.NOENCONTRADO;
        if (!comments)res.send(config.NOENCONTRADO);

        res.send(comments);
    });


    /// con rabbit
    app.post('/songs', async function(req, res){
        const q = config.QUEUE;
        const conn = await amqplib.connect(`amqp://${config.RABBITUSER}:${config.RABBITPASSWORD}@${RABBITHOST}:${RABBITPORT}`);
        const ch = await conn.createChannel();
        await ch.assertQueue(q);

        var id = await db.getLastId();
        const song = {
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

        const qm = JSON.stringify(song);
        return ch.sendToQueue(q, Buffer.from(qm, 'utf8'));
    });

    
    // app.post('/songs', async function(req, res){
    //     var id = await db.getLastId();
    //     const song = {
    //         "id": id,
    //         "publishDate": req.body.content,
    //         "name": req.body.name,
    //         "duration": req.body.duration,
    //         "url": req.body.url,
    //         "picture": req.body.picture,
    //         "type" : "",
    //         "ranking": {"favorited" : 0, "score" : 0},
    //         "author": {"name":req.body.authorname,"artists":""},
    //         "comments" : [],
    //         "lyrics" : "",
    //         "rating" : {"favorites": 0, "likes": 0}
    //     };
        
    //     var answr = await db.insertSong(song);
    //     res.send(answr);
    // });

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
