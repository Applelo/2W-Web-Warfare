function playAudio(url) {
// Play the audio file at url
var my_media = new Media(url,
// success callback
function () { console.log("playAudio():Audio Success"); },
// error callback
function (err) { console.log("playAudio():Audio Error: " + err); }
);

// Play audio
my_media.play();

// Pause after 10 seconds
setTimeout(function () {
my_media.pause();
}, 10000);
}
playAudio("m&s/music/test.mp3");
