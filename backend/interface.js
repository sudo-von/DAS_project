/* Interfaces. */
class IDatabase{
        constructor(){}
        getSongList(){
            throw new Error("Method getSongList needs to be implemented");
        };
        getSongLyrics(id){
            throw new Error("Method getSongLyrics needs to be implemented");
        };
        getSongComments(id){
            throw new Error("Method getSongComments needs to be implemented");
        };
        getHighlightedSongs(){
            throw new Error("Method getHighlightedSongs needs to be implemented");
        };
        getTopRatedSongs(){
            throw new Error("Method getTopRatedSongs needs to be implemented");
        };
        insertSong(song){
            throw new Error("Method insertSong needs to be implemented");
        };
        insertSongComment(comment){
            throw new Error("Method inserComment needs to be implemented");
        };
};

module.exports = { IDatabase }