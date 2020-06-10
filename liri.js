// code to read and set any environment variables with the dotenv package 
require("dotenv").config();

// import the node-spotify-api ,api keys, request for npm, & fs package
var Spotify = require("node-spotify-api");
var keys = require("./keys");
var request = require("request");
var fs = require("fs");