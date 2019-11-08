// Env config setup
require("dotenv").config();

// Require vars
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var fs = require("fs");
var axios = require('axios');
var moment = require('moment');

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
      case 'concert-this':
          queryConcert(searchInput);
          break;
      default:
          console.log("You didn't give liri a valid option. Please use any of the following options: \nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says")
    }
};
// Spotify search function
function querySpotify() {
    if (searchInput === undefined){
      console.log("You didn't type a song to search for. \nType spotify-this-song then type the song. \nRemeber to put the name of your song in quotes. \nIt should look something like this > spotify-this-song \"The Sign, Ace of Base\" \nYou should see results like the one below. \n")
        searchInput = "The Sign, Ace of Base"
    }
    spotify.search({ type: 'track', query: searchInput },
    function(err, data) {
        if (err) {
          console.log('Error occurred: ' + err);
          return;
        };
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
};
// Concert search function
function queryConcert() {
  if (searchInput === undefined){
    console.log("You didn't type a Band or Artist to search for. \nType concert-this then type the band/artist. \nRemeber to put the name of your search in quotes. \nIt should look something like this > concert-this \"Celine Dion\" \nYou should see results like the one below. \n")
      searchInput = "Celine Dion"
  }

  var searchURL = "https://rest.bandsintown.com/artists/" + searchInput + "/events?app_id=codingbootcamp"

  axios.get(searchURL)
  .then(function (response) {
    // handle success
      var concert = response.data[0]
      var concertDate = moment(concert.datetime).format('L')

// This logs the desired results to the terminal
    console.log("--------| Your Concert |--------");
    console.log("Name of Band/Artist | " + concert.lineup[0]);
    console.log("Name of Venue | " + concert.venue.name);
    console.log("Location of Concert | " + concert.venue.city + ", " + concert.venue.region + ", " + concert.venue.country);
    console.log("Date of Concert | " + concertDate);
    console.log("--------------------------------");

// Function for appending terminal output to .txt file
    fs.appendFileSync("log.txt", "--------| Your Concert |--------\n");
    fs.appendFileSync("log.txt", "Name of Band/Artist | " + concert.lineup[0] + "\n");
    fs.appendFileSync("log.txt", "Name of Venue | " + concert.venue.name + "\n");
    fs.appendFileSync("log.txt", "Location of Concert | " + concert.venue.city + ", " + concert.venue.region + ", " + concert.venue.country + "\n");
    fs.appendFileSync("log.txt", "Date of Concert | " + concertDate + "\n");
    fs.appendFileSync("log.txt", "--------------------------------\n");

  })
  .catch(function (error) {
    // handle error
    // console.log(error)
    console.log("Oops. liri couldn't find your concert. \nThe concert you are looking for may not exsist. Try another search. \nAlso you could have misspelled name of your band/artist or forgot to put it in quotes \nIt should look something like this > concert-this \"Celine Dion\"");
  })
  .finally(function () {
    // always executed
  });

};

// Movie search function

// "Do what it says" function

// Function for appending terminal output to .txt file

UserInputs(queryInput, searchInput)
