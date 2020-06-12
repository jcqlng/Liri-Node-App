// code to read and set any environment variables with the dotenv package 
require("dotenv").config();

// import the node-spotify-api ,api keys, request for npm, & fs package
var Spotify = require("node-spotify-api");
var keys = require("./keys");
var request = require("request");
var fs = require("fs");

//argv[2] chooses users actions; argv[3] is input parameter, ie; movie title
var userCommand = process.argv[2];
var secondCommand = process.argv[3];






//Switch command from class 
function mySwitch(userCommand) {

    switch (userCommand) {

        case "spotify-this-song":
            //search for a song on spotify using the second command as the song title parameter
            getSpotify(secondCommand);
            break;

        case "concert-this":
            getConcert();
            break;

        case "movie-this":
            getMovie();
            break;

        case "do-what-it-says":
            doWhat();
            break;
    }
}

// function for spotify search 
var spotifyThisSong = function(song){
    // initializes spotify api with the keys in .env file
    var spotify = new Spotify(keys.spotify);

    if (songName === undefined) {
        songName = "What's my age again";
    }

    spotify.search(
        {
            type: "track",
            query: userCommand
        },
        function (err, data) {
            if (err) {
                console.log("Error occurred: " + err);
                return;
            }

            var songs = data.tracks.items;

            for (var i = 0; i < songs.length; i++) {
                console.log(i);
                console.log("artist(s): " + songs[i].artists.map(getArtistNames));
                console.log("song name: " + songs[i].name);
                console.log("preview song: " + songs[i].preview_url);
                console.log("album: " + songs[i].album.name);
                console.log("-----------------------------------");
            }
        }
    );
};

var concertThis = function(artist){
    var region = ""
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

}

function getMovie() {
    var movieName = secondCommand;
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&tomatoes=true&apikey=codingbootcamp"