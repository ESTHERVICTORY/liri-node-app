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

//Each functions
//    * `concert-this`

function concert_this(selection) {
    //This will search the Bands in Town Artist Events API (`https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`) for an artist and render the following information about each event to the terminal:
    var queryUrl = "http://www.artists.bandsintown.com/bandsintown-api" + selection + "/events?app_id=codingbootcamp";
    request(queryUrl, function(error, response, body) {
  
    if (!error && response.statusCode === 200) {
        var concerts = JSON.parse(body);
        for (var i = 0; i < concerts.length; i++) {  
            console.log("**********EVENT INFO*********");  
            console.log(i);
            console.log("Name of the Venue: " + concerts[i].venue.name);
            console.log("Venue Location: " +  concerts[i].venue.city);
            console.log("Date of the Event: " +  concerts[i].datetime);
            console.log("*****************************");

            var newConcert = "********New Concert Entry***********" +response.data.Title;

            fs.appendFile("log.txt",newConcert,function (error){
                if(error) return (error);
            });
        }
    } else{
      console.log('Error occurred.');
    }
});}
//    * `spotify-this-song`  
 // var songName = "What's My Age Again"; 
 function spotify_this_song(selection) {
    if (selection === undefined) {
        selection = "What's My Age Again"; 
    }
    spotify.search(
        {
            type: "track",
            query: selection
        },
        function (err, data) {
            if (err) {
                console.log("Error occurred: " + err);
                return;
            }
            var songs = data.tracks.items;

            for (var i = 0; i < songs.length; i++) {
                console.log("**********SONG INFO*********");
                fs.appendFileSync("log.txt", "**********SONG INFO*********\n");
                console.log(i);
                fs.appendFileSync("log.txt", i +"\n");
                console.log("Song name: " + songs[i].name);
                fs.appendFileSync("log.txt", "song name: " + songs[i].name +"\n");
                console.log("Preview song: " + songs[i].preview_url);
                fs.appendFileSync("log.txt", "preview song: " + songs[i].preview_url +"\n");
                console.log("Album: " + songs[i].album.name);
                fs.appendFileSync("log.txt", "album: " + songs[i].album.name + "\n");
                console.log("Artist(s): " + songs[i].artists[0].name);
                fs.appendFileSync("log.txt", "artist(s): " + songs[i].artists[0].name + "\n");
                console.log("*****************************");  
                fs.appendFileSync("log.txt", "*****************************\n");
             }
        }
    );
};

//    * `movie-this`
function movie_this(movie) {
    if (!movie) {
        movie = "Mr. Nobody";
    }
var movieQueryUrl = `http://www.omdbapi.com/?t=${movie}&y=&plot=short&apikey=trilogy`;

axios.get(movieQueryUrl).then(
    function(response){
        console.log(" ************Movie Response **************");
        console.log(" Movie Title: " +response.data.Title);
        console.log(" Release Date: " +response.data.Year);
        console.log(" IMDB Rating: " +response.data.Rating);
        console.log(" Country Produced: " +response.data.Country);
        console.log(" Language: " +response.data.Language);
        console.log(" Plot: " +response.data.Plot);
        console.log(" List of Actors: " +response.data.Actors);

        var logMovie = "********New Movie Entry***********" +response.data.Title +" Release Date: " +response.data.Year + " IMDB Rating: " +response.data.Rating;
        
        fs.appendFile("log.txt",logMovie,response, function (error){
            if(error) return (error);
        });
    });
};
   //* `do-what-it-says`
function do_what_it_says() {
    
}
//random text part
function random(do_what_it_says) {
    fs.readFile('random.txt', 'utf8', function (error, data) {
        var dataArr = data.split(',');

        if (error) {
            return console.log(error);
        } else {
            console.log(data);
        
      };
    });
};
