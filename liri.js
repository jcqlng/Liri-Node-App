// code to read and set any environment variables with the dotenv package 
require("dotenv").config();

// import the node-spotify-api ,api keys, request for npm, & fs package
var Spotify = require("node-spotify-api");
var keys = require("./keys");
var request = require("request");
var fs = require("fs");

// initializes spotify api with the keys in .env file
var spotify = new Spotify(keys.spotify);

// function for spotify search 
var spotifyThisSong = function(song){
    if (!song){
        song = "The sign Ace of Bass"
    }
}

var concertThis = function(artist){
    var region = ""
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

}


