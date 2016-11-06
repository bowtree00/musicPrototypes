class Library {
  constructor(props) {
    this.name = props.name;
    this.creator = props.creator;
    this.playlists = []; 
  }

  addPlaylist (playlist) {
    this.playlists.push(playlist);
  }
}

// Playlist objects can be added to an instance of a library
// Each Playlist has a name which is required upon creation
// A Playlist also has many tracks

class Playlist {
  constructor(props) {
    this.name=props.name;
    this.tracks=[];
    this.rating=0;
    this.duration=0;
  }

  addTrack (track) {
    this.tracks.push(track);
  }

  overallRating () {
  // Each Playlist also has an overallRating function which will calculate the rating by averaging the rating of its tracks
  // 
    var sum = 0;
    var i = 0;

    this.tracks.forEach(function(track) {
      sum += track.rating;
      i += 1;
    })

    this.rating = sum/i;

    // can I use 'reduce' here instead?
  }

  totalDuration (tracks) {
  // Each Playlist also has a totalDuration function which will sum the duration of all of its tracks
  
    var sum = 0;

    this.tracks.forEach(function(track) {
      sum += track.length;
    })

    this.duration=sum;
  }
}


// A Track has a title, a rating (an integer from 1 to 5) and a length (integer in seconds) all of which are required when creating a new track


class Track {
  constructor(props) {
    this.title = props.title;
    this.rating = props.rating;
    this.length = props.length;
  }

  // methods go here
}


// NEXT STEPS
// Can create individual tracks using new Track. 
// Need to be able to add these to a playlist - create a method (in Playlist?) that allows you to add a track to the Playlist.  So, create a new Playlist with the required info, then use an addTrack method to add tracks. Then use the overallRating and totalDuration methods to create overall ratings and duration? (we may not need to store these in the Playlist object, but rather just compute them with the methods when we want that info. Then need to get the playlist into the library - so create an 'addPlaylist' method (in Library??) to add the playlist.


// Once defined, your code should use new to instantiate these functions to create instances of one library and then add new tracks and playlists to the library.

// CREATE NEW TRACKS
track1 = new Track ({title: "First Song", rating: 4, length: 150});
track2 = new Track ({title: "Second Song", rating: 2, length: 220});
track3 = new Track ({title: "Third Song", rating: 5, length: 135});
track4 = new Track ({title: "Fourth Song", rating: 5, length: 200});
track5 = new Track ({title: "Fifth Song", rating: 3, length: 275});

// console.log(track1);
// console.log(track2);
// console.log(track3);
// console.log(track4);
// console.log(track5);


// CREATE PLAYLIST
myPlaylist = new Playlist ({name: "Christian's Playlist"});

// ADD TRACKS TO PLAYLIST & CREATE RATINGS AND DURATION
myPlaylist.addTrack(track1);
myPlaylist.addTrack(track2);
myPlaylist.addTrack(track3);
myPlaylist.addTrack(track4);
myPlaylist.addTrack(track5);

myPlaylist.overallRating();
myPlaylist.totalDuration();

myLibrary = new Library ({name: "Christian's Library", creator: "Christian"});

myLibrary.addPlaylist(myPlaylist);


console.log("myPlaylist", myPlaylist);
console.log("===========================");
console.log("myLibrary", myLibrary);

// QUESTIONS:
// How do you make entering something mandatory when creating a 'new' object?
// How can I use 'reduce' or other functions to make the calculations easier?
// 

