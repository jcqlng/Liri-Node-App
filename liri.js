require("dotenv").config();

// Import the node-spotify-api NPM package.
var Spotify = require("node-spotify-api");

// Import the API keys
var keys = require("./keys");

// Import the axios npm package.
var axios = require("axios");

// Import the moment npm package.
var moment = require("moment");

// Import the FS package for read/write.
var fs = require("fs");

// Initialize the spotify API client using our client id and secret
var spotify = new Spotify(keys.spotify);

var userCommand = process.argv[2];
var secondCommand = process.argv[3];

// FUNCTIONS
// =====================================

// Helper function that gets the artist name
var getArtistNames = function(artist) {
    return artist.name;
  };

// Function for running a Spotify search
var getMeSpotify = function(songName) {
    if (songName === undefined) {
      songName = "What's my age again";
    }
  
    spotify.search(
      {
        type: "track",
        query: songName
      },
      function(err, data) {
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

var getConcert = function(artist){
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
        for(var i = 0; i < response.data.length; i++){
            //grab the event object for each loop
            var event = response.data[i];

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

var getMovie = function (movieName) {
    
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&tomatoes=true&i=" + keys.omdb.id + "&apikey="+ keys.omdb.secret;

    //execute a GET call with the queryurl to get the results back
    axios.get(queryUrl)
    .then(function (response) {
        // handle success
        //console.log(response);

        //loop through the response and print the results
        
            var movie = response.data;

            // Title of the movie. => movie.Title
            console.log("Title: " + movie.Title);
            // Year the movie came out. => movie.Year
            console.log("Release Year: " + movie.Year);
            // IMDB Rating of the movie. => movie.imdbRating
            console.log("IMdB Rating: " + movie.imdbRating); 
            // Rotten Tomatoes Rating of the movie. => movie.Metascore
            console.log("Rotten Tomatoes Rating: " + movie.Metascore);
            // Country where the movie was produced. => movie.Country
            console.log("Country: " + movie.Country);
            // Language of the movie. => movie.Language
            console.log("Language: " + movie.Language);
            // Plot of the movie. => movie.Plot
            console.log("Plot: " + movie.Plot);
            // Actors in the movie. => movie.Actors
            console.log("Actors: " + movie.Actors);

            console.log("--------------------------------------------")
        
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
        console.log("End of movies.")
    });
};

var doWhat = function(itSays) {
    
    //open the random.txt file and read the entire text into an array
    var data = fs.readFileSync("random.txt", "utf-8");
    //split the data into a lines array
    var lines = data.split("\r");
    //initialize an empty line. will put the found line into it
    var found = "";
    //loop through the lines and see if the "itSays" text can be found
    for(var i=0; i < lines.length; i++){

        if(lines[i].includes(itSays)) {
            //assign the value of the line to the found variable
            found = lines[i].split(",")[1];
            //break out of the loop once it's found
            break;
        }   
    }

    //if found is not empty, call the mySwitch function again
    if(found !== ""){
        switch(itSays) {
            case "spotify-this-song":
            //search for a song on spotify using the second command as the song title parameter
            getMeSpotify(found);
            break;

            case "concert-this":
            getConcert(found);
            break;

            case "movie-this":
            getMovie(found);
            break;
        }
    }

    
};

var mySwitch = function (userCommand) {

    switch (userCommand) {

        case "spotify-this-song":
            //search for a song on spotify using the second command as the song title parameter
            getMeSpotify(secondCommand);
            break;

        case "concert-this":
            getConcert(secondCommand);
            break;

        case "movie-this":
            getMovie(secondCommand);
            break;

        case "do-what-it-says":
            doWhat(secondCommand);
            break;
    };
};


//Main function call -> here is where the program starts
mySwitch(userCommand)