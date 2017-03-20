var sounds = [];
var musics = [];

function create_sound(src, type, loop) {
  if (type == "sound") {
    sounds.push(document.createElement("audio"));
    var length = sounds.length - 1;
    if (loop == true) {
        sounds[length].addEventListener("ended", function () {
        // Wait 500 milliseconds before next loop
        setTimeout(function () {   sounds[length].play(); }, 500);
      }, false);
    }
    sounds[length].src = src;
    sounds[length].play();
  }
  else if (type == "music") {
    musics.push(document.createElement("audio"));
    var length = musics.length - 1;
    if (loop == true) {
        musics[length].addEventListener("ended", function () {
        // Wait 500 milliseconds before next loop
        setTimeout(function () {   musics[length].play(); }, 500);
      }, false);
    }
    musics[length].src = src;
    musics[length].play();
  }
}

function volume_sounds(type, volume) {
  if (type == "sound") {
    for(var i=0; i<sounds.length; i++)
      sounds[i].volume = volume;
  }
  else if (type == "music") {
    for(var j=0; j<musics.length; j++)
      musics[j].volume = volume;
  }
}

function set_volume_setting() {

    if (localStorage.getItem("paramMusic") === null && localStorage.getItem("paramSound") === null) {
      localStorage.paramMusic = 1;
      localStorage.paramSound = 1;
    }
    volume_sounds("sound",localStorage.paramSound);
    volume_sounds("music",localStorage.paramMusic);
}
