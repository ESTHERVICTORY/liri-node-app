//add code to read and set any environment variables with the dotenv package:

require('dotenv').config();

const fs = require("fs");
var axios = require("axios");
var moment = require("moment");
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
        case `concert-this`: concert_this(selection);
            break;
        case `spotify-this-song`: spotify_this_song(selection);
            break;
        case `movie-this`: movie_this(selection);
            break;
        case `do-what-it-says`: do_what_it_says;
            break;
        default: console.log("Invalid Input");
            break;
    }
}
//Each functions
//    * `concert-this`

function concert_this() {
    console.log("work");
}
//    * `spotify-this-song`   
function spotify_this_song() {

}
//    * `movie-this`
function movie_this() {
    if (!movie) {
        movie = "Mr. Nobody";
    }
var movieQueryUrl = "http:www.omcbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

axios.request(movieQueryUrl).then{
function(response){
    console.log(" ************Movie Response **************");
    console.log(" Movie Title: " +response.data.Title);
    console.log(" Release Date: " +response.data.Year);
    console.log(" IMDB Rating: " +response.data.Rating);
    console.log(" Country Produced: " +response.data.Country);
    console.log(" Language: " +response.data.Language);
    console.log(" Plot: " +response.data.Plot);
    console.log(" List of Actors: " +response.data.Actors);
}
}
}
//    * `do-what-it-says`
function do_what_it_says() {

}


// random text part
function random() {
    fs.readFile('random.txt', 'utf8', function (error, data) {
        var dataArr = data.split(',');

        if (error) {
            return console.log(error);
        } else {
            console.log(data);

        }
    });
};