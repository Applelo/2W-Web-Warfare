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

function add_score(pseudo, score) {
  if ($.jStorage.get("scores") == null)
    $.jStorage.set('scores',[{"pseudo": pseudo, "score": score}]);
  else {
    var temp = $.jStorage.get("scores");
    temp = JSON.stringify(temp);
    temp = temp.replace('[','');
    temp = temp.replace(']','');
    var temp = "[" + temp + ', {"pseudo": "' + pseudo + '", "score": ' + score + '}' + "]";
    var json = JSON.parse(temp);
    $.jStorage.set('scores',json);
  }
}

$("#remove-score").click(function() {
  if (confirm('Voulez vous supprimer tous les scores ?')) {
    $.jStorage.deleteKey("scores");
  }
});
