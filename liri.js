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
    var songName = "What's My Age Again";// by blink-82

    spotify.search({type: "track ", query:songName}, function (error,data){
        if(error){
            return console.log("There is error  "+ error );
        }
        console.log(" ************Spotify Response **************");
        console.log("Artist Name: "+data.tracks.items[0].album.artist[0].name);
        console.log("Song Name: "+data.tracks.items[0].name);
        console.log("Song Demo Link: "+data.tracks.items[0].href);
        console.log("Song Name: "+data.tracks.items[0].album.name);
    })
};

//    * `movie-this`
function movie_this() {
    if (!movie) {
        movie = "Mr. Nobody";
    }
var movieQueryUrl = "http:www.omcbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

// axios.request(movieQueryUrl).then{
//     function(response){
//         console.log(" ************Movie Response **************");
//         console.log(" Movie Title: " +response.data.Title);
//         console.log(" Release Date: " +response.data.Year);
//         console.log(" IMDB Rating: " +response.data.Rating);
//         console.log(" Country Produced: " +response.data.Country);
//         console.log(" Language: " +response.data.Language);
//         console.log(" Plot: " +response.data.Plot);
//         console.log(" List of Actors: " +response.data.Actors);

//         var logMovie = "********New Movie Entry***********" +response.data.Title;

//         fs.appendFile("log.txt",logMovie,function (error){
//             if(error) return (error);
//         });
//     }
// };
// }
//    * `do-what-it-says`
function do_what_it_says() {

}


