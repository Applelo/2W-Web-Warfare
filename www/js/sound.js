var sounds = {};
var musics = {};

function create_sound(name, src, type, loop) {
  if (type == "sound") {
    var sound = new Howl({
      src: [src],
      loop: loop
    });
    sounds[name] = sound;
    //console.log(sounds);
  }
  else if (type == "music") {
    var music = new Howl({
      src: [src],
      loop: loop
    });
    musics[name] = music;
  }
}

function volume_sounds(type, volume) {
  if (type == "sound") {
    for (var property in sounds) {
      if (sounds.hasOwnProperty(property)) {
        sounds[property].volume(volume);
      }
    }
  }
  else if (type == "music") {
    for (var property in musics) {
      if (musics.hasOwnProperty(property)) {
        musics[property].volume(volume);
      }
    }
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
