# Project name liri-node-app

I developed this this to showcase my ability work with different API's inside of Node.js and have everything working together. 

**LIRI** is a _Language_ Interpretation and Recognition Interface. **LIRI** will be a command line node app that 
takes in parameters and gives you back data. The user has the option of using four commands (listed below) in conjunction 
with specific parameters associated with the commands. 

-----
# Under the Hood

>**TECHNOLOGIES USED**
* Javascript - *main runtime program language*
* Node.js - *allows ability to run program from terminal*
* **Node packages:**
    * Axios - *assists in handling the data from API searches*
    * Node-Spotify-API - *spotify's own program for their API searches*
    * Moment - *package for handling and formating data/time information*
    * DotEnv - *allows you hide UserIDs and Passkeys in the environment for security*
* **APIs used:**
    * Spotify-API - *full of songs, bands, and previews*
    * Bands in Town - *tons of concert info for various artists*
    * OMDB - *database for movies actors ratings and more*
* Git - *command line interface for your terminal*
* GitHub - *repository holding/sharing code*

-----
# Step by Step instructions

The instructions to use LIRI are already built into the application itself. 

Open your terminal such as Bash.

Navigate to the folder that contains the `liri.js` file.

If you just simply run the file `liri.js` from your terminal it will give you a list of the commands and how to run 
a search with those commands.

![Shows starting commands with example](/screenshots/starting_command_liri-node-app.jpg)

The `Commands` are:

* `spotify-this-song`
* `concert-this`
* `movie-this`
* `do-what-it-says`

Depending on the command you run, the output will vary. Then after the command you type in what you are searching 
for in quotes. If you don't type it in quotes you can get back odd search results.

## Example 1: Run the spotify-this-song command

 `node liri.js spotify-this-song` With no search parameter and you will get usage instructions and auto return a result for you.

![Shows concert search result with no input](/screenshots/spotify_no_input_liri-node-app.jpg)

`node liri.js spotify-this-song "Sweet Dreams"` will give the below result.

![Shows concert search result with input](/screenshots/spotify_with_input_liri-node-app.jpg)

## Example 2: Run the concert-this command

 `node liri.js concert-this` With no search parameter will give you instructions and auto return the below result for you.

![Shows concert search result with no input](/screenshots/concert_no_input_liri-node-app.jpg)

 `node liri.js concert-this "Ozzy Ozborne"` will give the below result.

![Shows concert search result with with input](/screenshots/concert_with_input_liri-node-app.jpg)

## Example 3: Run the movie-this command

 `node liri.js movie-this` With no search parameter will give you instructions and auto return the below result for you.

![Shows movie search result with no input](/screenshots/movie_no_input_liri-node-app.jpg)

 `node liri.js movie-this "The Lord of the Rings"` will give the below result.

![Shows movie search result with with input](/screenshots/movie_with_input_liri-node-app.jpg)

-----

# Other features

The application has two other features built into it. 

The first one is the `do-what-it-says` function. There is a file called `random.txt` and when you run the 
function **LIRI** will pull whatever search has been put into the `random.txt` file and give you the results.

The second one is the save searches function. Any search you make will be recorded to a `log.txt` file. 
So any time you need to look up what you have already searched just check out the log file 