// var Library = {
//   name: "",
//   creator: "",
//   playlists: []
// }

function Library(props) {
  this.name = props.name;
  this.creator = props.creator;
  this.playlists = [];
}

// A Track has a title, a rating (an integer from 1 to 5) and a length (integer in seconds) all of which are required when creating a new track
// var Track = {
//   title: "",
//   rating: 0, //integer from 1-5
//   length: 0
// }

function Track(props) {
  this.title = props.title;
  this.rating = props.rating;
  this.length = props.length;
}

// Playlist objects can be added to an instance of a library
// Each Playlist has a name which is required upon creation
// A Playlist also has many tracks
// var Playlist = {
//   name: "",
//   tracks: [], 
//   rating: 0, // this is calculated
//   duration: 0
// }

function Playlist(Props) {
  this.name = props.name;
  this.tracks = [];
  // this.rating = 0;
  // this.duration = 0;
}


Playlist.prototype.overallRating = function (tracks) {
// Each Playlist also has an overallRating function which will calculate the rating by averaging the rating of its tracks
}

Playlist.prototype.totalDuration = function (tracks) {
// Each Playlist also has a totalDuration function which will sum the duration of all of its tracks
}


// Once defined, your code should use new to instantiate these functions to create instances of one library and then add new tracks and playlists to the library.




