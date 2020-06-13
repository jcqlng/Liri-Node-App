# liri-node-app

# Description 

The liri node app is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

# Command Functions
* Breakdown of commands copied from Bootcamp Repo 
1. `node liri.js concert-this <artist/band name here>`

   * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:

     * Name of the venue

     * Venue location

     * Date of the Event (use moment to format this as "MM/DD/YYYY")
    * Screenshots: 
      * Concert-this command:
        ![concert-this-command](/screenshots/concert-this-command.png)
      * Concert-this result: 
        ![concert-this-result](/screenshots/concert-this-result.png)

2. `node liri.js spotify-this-song '<song name here>'`

   * This will show the following information about the song in your terminal/bash window

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from
    * Screenshots:
      * Spotify-this command:
        ![spotify-this-song-command](/screenshots/spotify-this-song-command.png)
      * Spotify-this results:
        ![spotify-this-song-results](/screenshots/spotify-this-song-results.png)

3. `node liri.js movie-this '<movie name here>'`

   * This will output the following information to your terminal/bash window:

     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     ```

   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

    * Screenshots:
      * Movie-this command:
        ![Movie this command](/screenshots/movie-this-command.png)
      * Movie-this results:
        ![Movie this results](/screenshots/movie-this-result.png)

4. `node liri.js do-what-it-says`

   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

     * Edit the text in random.txt to test out the feature for movie-this and concert-this.
    * Screenshots:
      * Do-what-it-says concert-this command:
        ![Do what is says - concert command](/screenshots/do-what-it-says-concert-this-command.png)
      * Do-what-it-says concert-this result:
        ![Do what is says - concert results](/screenshots/do-what-it-says-concert-this-result.png)
      * Do-what-it-says movie-this command:
        ![Do what is says - song command](/screenshots/do-what-it-says-movie-this-command.png)
      * Do-what-it-says movie-this result:
        ![Do what is says - song results](/screenshots/do-what-it-says-movie-this-result.png)
      * Do-what-it-says spotify-this-song command:
        ![Do what is says - movie command](/screenshots/do-what-it-says-spotify-command.png)
      * Do-what-it-says spotify-this-song result:
        ![Do what is says - movie results](/screenshots/do-what-it-says-spotify-result.png)


# API & Packages & Dependencies

* [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

* [Axios](https://www.npmjs.com/package/axios)

* You'll use Axios to grab data from the [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

* [Moment](https://www.npmjs.com/package/moment)

* [DotEnv](https://www.npmjs.com/package/dotenv)

# Authors and Acknowledgements 