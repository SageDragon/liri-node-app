// Env config setup
require("dotenv").config();

// Require vars
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

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

    }
};
// Spotify search function
function querySpotify() {
  console.log("Hello")
    if (searchInput === undefined){
        searchInput = "The Sign, Ace of Base"
    }
    spotify.search({ type: 'track', query: searchInput }, 
    function(err, data) {
        if (err) {
          console.log('Error occurred: ' + err);
          return;
        }
       
     console.log(data.tracks.items[0].artists.name); 
     console.log(data.tracks.items[0].name); 
    //  console.log(data.tracks.items[0].albums.); 
    //  console.log(data.tracks.items[0].albums.); 
    });
}
UserInputs(queryInput, searchInput)
// Concert search function

// Movie search function

// "Do what it says" function

// Function for appending terminal output to .txt file

