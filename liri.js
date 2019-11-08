// Env config setup
require("dotenv").config();

// Require vars
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var fs = require("fs");

// Setup vars
var spotify = new Spotify(keys.spotify); 

// User input vars
var queryInput = process.argv[2];
var searchInput = process.argv[3];

// Switch function for search selection
function UserInputs (queryInput, searchInput){
    switch (queryInput) {
      case 'spotify-this-song':
          querySpotify(searchInput);
          break;
      default:
          console.log("You didn't give liri a valid option. Please use any of the following options: \nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says")
    }
};
// Spotify search function
function querySpotify() {
  // console.log("Hello")
    if (searchInput === undefined){
      console.log("You didn't type a song to search for. \nType spotify-this-song then type the song. \nRemeber to put the name of your song in quotes. \nIt should look something like this > spotify-this-song \"The Sign, Ace of Base\" \nYou should see results like the one below. \n")
        searchInput = "The Sign, Ace of Base"
    }
    spotify.search({ type: 'track', query: searchInput }, 
    function(err, data) {
        if (err) {
          console.log('Error occurred: ' + err);
          return;
        }
// This logs the desired results to the terminal
        var song = data.tracks.items[0]
       
     console.log("--------| Your Song |--------");  
     console.log("Name of Song | " + song.name); 
     console.log("Name of Album | " + song.album.name); 
     console.log("Name of Artist | " + song.artists[0].name); 
     console.log("--Preview Link of Song Below--");
     console.log(song.preview_url); 
     console.log("-----------------------------");

// Function for appending terminal output to .txt file
     fs.appendFileSync("log.txt", "--------| Your Song |--------\n"); 
     fs.appendFileSync("log.txt", "Name of Song | " + song.name + "\n"); 
     fs.appendFileSync("log.txt", "Name of Album | " + song.album.name + "\n"); 
     fs.appendFileSync("log.txt", "Name of Artist | " + song.artists[0].name + "\n"); 
     fs.appendFileSync("log.txt", "--Preview Link of Song Below--\n");
     fs.appendFileSync("log.txt", song.preview_url + "\n"); 
     fs.appendFileSync("log.txt", "-----------------------------\n");
    });
}
// Concert search function

// Movie search function

// "Do what it says" function

// Function for appending terminal output to .txt file

UserInputs(queryInput, searchInput)
