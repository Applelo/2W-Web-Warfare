var sounds = [];
var musics = [];

function aleatoire(N) {
  return (Math.floor((N)*Math.random()+1));
}


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

    if(localStorage.getItem("paramMusic") === null && localStorage.getItem("paramSound") === null) {
      localStorage.paramMusic = 1;
      localStorage.paramSound = 1;
    }
    volume_sounds("sound",localStorage.paramSound);
    volume_sounds("music",localStorage.paramMusic);

}

if (localStorage.paramMusic == 1)
  $("#flip-music option[value='true']").attr("selected","'selected'");
else
  $("#flip-music option[value='false']").attr("selected","'selected'");
if (localStorage.paramSound == 1)
  $("#flip-sound option[value='true']").attr("selected","'selected'");
else
  $("#flip-sound option[value='false']").attr("selected","'selected'");


$( "#flip-music" ).change(function() {
  volume_sounds("music", localStorage.paramMusic);
  if ($(this).val() == "false")
    localStorage.paramMusic = 0;
  else
    localStorage.paramMusic = 1;
  set_volume_setting();
});

$( "#flip-sound" ).change(function() {
  volume_sounds("sound", localStorage.paramSound);
  if ($(this).val() == "false")
    localStorage.paramSound = 0;
  else
    localStorage.paramSound = 1;
  set_volume_setting();
});

create_sound("m&s/music/2-01 Pull up a Chair.mp3", "music", true);
create_sound("m&s/sound/intro/" + aleatoire(3) + ".mp3", "sound", false);



set_volume_setting();
