/*Album: Write a function called make_album() that builds a Object
describing a music album. The function should take in an artist name and an
album title, and it should return a Object containing these two pieces of
information. Use the function to make three dictionaries representing different
albums. Print each return value to show that Objects are storing the
album information correctly.

Add an optional parameter to make_album() that allows you to store the
number of tracks on an album. If the calling line includes a value for the number
of tracks, add that value to the album’s Object. Make at least one new
function call that includes the number of tracks on an album.
*/
function make_album1(artist, albumTitle) {
    return { artist: artist, albumTitle: albumTitle };
}
var album1 = make_album1("Atif Aslam", "kismat ma meri chain se jena likh da");
var album2 = make_album1("nadeem sarver", "rok na tu rahwar");
var album3 = make_album1("Ali jee", "Ali pasand hai");
console.log(album1);
console.log(album2);
console.log(album3);
// number of tracks on an album
function make_album(artist, albumTitle, numberOfTrack) {
    return { artist: artist, albumTitle: albumTitle, numberOfTrack: numberOfTrack };
}
var album4 = make_album("nadeem sarver", "rok na tu rahwar", 7);
var album5 = make_album("Ali jee", "Ali pasand hai");
var album6 = make_album("Atif Aslam", "kismat ma meri chain se jena likh da", 2);
console.log(album4);
console.log(album5);
console.log(album6);
