// code to read and set any environment variables with the dotenv package 
require("dotenv").config();


// import the node-spotify-api ,api keys, request for npm, & fs package
var Spotify = require("node-spotify-api");
var keys = require("./keys");
var request = require("request");
var fs = require("fs");
var moment = require("moment");

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
            getConcert(secondCommand);
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
    //query url that will find a concert based on an artist name
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

    //execute the search query and wait for a return object 
    //will do this using Axios GET command 
    //Documentation at https://www.npmjs.com/package/axios
    axios.get(queryUrl)
    .then(function (response) {
        // handle success
        
        //loop through the results and display each on the console
        for(var i = 0; i < response.length; i++){
            //grab the event object for each loop
            var event = response[i];

            //display all the necessary items on the console
            var venue = event.title === "" ? event.artist.name + "@" + event.venue.name : event.title;
            //Name of the venue
            console.log("venue: " + venue);
            
            //Venue location
            console.log("venue Location: " + event.venue.location);

            //Date of the Event (use moment to format this as "MM/DD/YYYY")
            console.log("date of event: " + moment(event.datetime).format("MM/DD/YYYY"));
            console.log("------------------------------------------------")
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
        console.log("End of concerts")
    });

    

}

function getMovie() {
    var movieName = secondCommand;
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&tomatoes=true&apikey=codingbootcamp"
}