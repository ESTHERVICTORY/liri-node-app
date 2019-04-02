//add code to read and set any environment variables with the dotenv package:

require('dotenv').config();


var axios = require("axios");
// Add the code required to import the `keys.js` file and store it in a variable.
const keys = require("./keys.js");
//* You should then be able to access your keys information like so

const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

var request = require("request");

var response = process.argv[2];
var selection = JSON.stringify(process.argv[3]);

// 9. Make it so liri.js can take in one of the following commands:
function command(response, selection) {
    switch (response) {
        case `concert-this`: concert_this;
            break;
        case `spotify-this-song`: spotify_this_song;
            break;
        case `movie-this`: movie_this;
            break;
        case `do-what-it-says`: do_what_it_says;
            break;
        default: console.log("Invalid Input");
            break;
    }
}
//Each functions
//    * `concert-this`
function command(response, selection) {
    function concert_this(selection) {

    }
    //    * `spotify-this-song`   
    function spotify_this_song(selection) {

    }
    //    * `movie-this`
    function movie_this(selection) {

    }
    //    * `do-what-it-says`
    function do_what_it_says(selection) {

    }

}

// random text part
const fs = require("fs");
fs.readFile('random.txt', 'utf8', function (error, data) {
    var dataArr = data.split(',');

    if (error) {
        return console.log(error);
    }
}
