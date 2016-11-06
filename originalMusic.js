var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function () {
    // prints a list of all playlists, in the form:
    // p01: Coding Music - 2 tracks
    // p02: Other Playlist - 1 tracks

    var playObject = this.playlists;
    var playlistKeys = Object.keys(playObject);

    for (key of playlistKeys) {
      console.log(this.getPlaylistDetails(playObject, key));
    }
  },

  printTracks: function () {
    // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
    // t02: Model View Controller by James Dempsey (WWDC 2003)
    // t03: Four Thirty-Three by John Cage (Woodstock 1952)
    
    var trackObj = this.tracks;
    var trackKeys = Object.keys(trackObj);

    for (key of trackKeys) {
      console.log(this.getTrackDetails(trackObj, key));
    }
  },
  printPlaylist: function (playlistId) {
    // p01: Coding Music - 2 tracks
    // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
    // t02: Model View Controller by James Dempsey (WWDC 2003)var playObject = library.playlists;
    var trackObject = this.tracks;
    var playObject = this.playlists;
    
    console.log(this.getPlaylistDetails(playObject, playlistId));

    var tracksFromPlaylist = playObject[playlistId].tracks;

    for (oneTrack of tracksFromPlaylist) {
      console.log(getTrackDetails(trackObject, oneTrack));
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    // adds an existing track to an existing playlist
    var playObject = this.playlists;
    var trackObject = this.tracks;

    var tempTrackArray = playObject[playlistId].tracks;

    if (trackObject[trackId]) {
      var tempTrackArray = tempTrackArray.push(trackId);
    }
    console.log(this.printPlaylist(playlistId));
  },

  uid: function() {
    // generates a unique id
    // (use this for addTrack and addPlaylist)
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function (name, artist, album) {
  // adds a track to the library
    var playObject = this.playlists;
      var trackObject = this.tracks;

      uniqueID = this.uid();

      newTrack = {
        id: uniqueID,
        name: name,
        artist: artist,
        album: album
      }

      trackObject[uniqueID] = newTrack;

      console.log(this.printTracks())
  },
  addPlaylist: function (name) {
    // adds a playlist to the library
    var playObject = this.playlists;
    var trackObject = this.tracks;

    uniqueID = this.uid();

    newPlaylist = {
      id: uniqueID,
      name: name,
      tracks: []
    }

    playObject[uniqueID]=newPlaylist;

    console.log(this.printPlaylists());
  },
  // STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

  printSearchResults: function(query) {
    var trackObject = this.tracks;
    var trackFound = false;

    for (oneTrack in trackObject) {
      nameString = trackObject[oneTrack].name;
      artistString = trackObject[oneTrack].artist;
      albumString = trackObject[oneTrack].album;

      // console.log(nameString.search(query));
      if (nameString.search(query) != -1) {
        //console.log("it's in the name!");
        console.log(this.getTrackDetails(trackObject, oneTrack)); 

        trackFound = true;
      } else if (artistString.search(query) != -1) {
        // console.log("it's in the artist!");
        console.log(this.getTrackDetails(trackObject, oneTrack)); 

        trackFound = true;
      } else if (albumString.search(query) != -1) {
        // console.log("it's in the album!")
        console.log(this.getTrackDetails(trackObject, oneTrack)); 
        trackFound = true;
      } 
    }

    if (!trackFound) {
      console.log("No tracks found with that name")
    }
  },
  getTrackDetails: function(trackObject, trackId) {
    var trackID = trackObject[trackId].id;
    var trackName = trackObject[trackId].name;
    var trackArtist = trackObject[trackId].artist;
    var trackAlbum = trackObject[trackId].album;

    var outString = trackID + ": " + trackName + " by " + trackArtist + " (" + trackAlbum + ")";

    return outString;
  },
  getPlaylistDetails: function(playObject, playlistId) {
    var playID = playObject[playlistId].id;
    var playName = playObject[playlistId].name;
    var playNumTracks = playObject[playlistId].tracks.length;

    var outString = playID + ": " + playName + " - " + playNumTracks + " tracks";
    
    return outString;
  }
}

console.log(library.getPlaylistDetails(library.playlists, "p02"))