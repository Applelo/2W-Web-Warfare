//Music parameters

if (localStorage.paramMusic == 1)
  $("#flip-music option[value='true']").attr("selected","'selected'");
else
  $("#flip-music option[value='false']").attr("selected","'selected'");
if (localStorage.paramSound == 1)
  $("#flip-sound option[value='true']").attr("selected","'selected'");
else
  $("#flip-sound option[value='false']").attr("selected","'selected'");


$( "#flip-music" ).change(function() {
  if (localStorage.paramSound == 1)
    create_sound("m&s/sound/button/click.mp3", "sound", false);
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
  if (localStorage.paramSound == 1)
    create_sound("m&s/sound/button/click.mp3", "sound", false);
});


create_sound("m&s/music/Main_Title.mp3", "music", false);
create_sound("m&s/music/Main_Title_Noise.mp3", "music", true);

if (localStorage.paramIntro != 1) {
  create_sound("m&s/sound/intro/" + aleatoire(3) + ".mp3", "sound", false);
  localStorage.paramIntro = 1;
}


$('[type="button"], .ui-btn-left, ui-btn-right, .ui-btn, a').mouseenter(function(event) {
  if (localStorage.paramSound == 1)
    create_sound("m&s/sound/button/select.mp3", "sound", false);
});

$('.ui-btn').click(function() {
    if (localStorage.paramSound == 1)
      create_sound("m&s/sound/button/open.mp3", "sound", false);
});

$('.ui-btn-right, .ui-btn-left').click(function() {
    if (localStorage.paramSound == 1)
      create_sound("m&s/sound/button/click.mp3", "sound", false);
});

set_volume_setting();


//Score option
function set_score() {
  refresh_score($.jStorage.get("scores",null));
}

function refresh_score(scores) {
  var result = "";
  if (scores === null)
    result = result + "<p>Vous n'avez pas encore enregistré de score :(</p>";
  else {//Build a scores table
    result = result + "<table data-role='table' class='ui-responsive'><thead><tr><th>Pseudo</th><th>Scores</th></tr></thead><tbody>";
    for(var i=0; i < scores.length; i++)
      result = result + "<tr><td>" + scores[i]["pseudo"] + "</td><td>" + scores[i]["score"] + "</td></tr>";
    result = result + "</tbody></table>";
  }
  document.getElementById("scores_result").innerHTML = result;
}


document.getElementById("refresh_score").onclick = function(){
  set_score();
};


$("#remove-score").click(function() {
  if (confirm('Voulez vous supprimer tous les scores ?')) {
    $.jStorage.deleteKey("scores");
    $(".remove-score-button").css("display","none");
  }
});

if ($.jStorage.get("scores",null) === null)
  $(".remove-score-button").css("display","none");
