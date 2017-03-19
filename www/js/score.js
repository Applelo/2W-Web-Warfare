localStorage.setItem('scores', null);

function set_score() {
  localStorage.scoress = [{"pseudo": "Michel", "score": "110"},{"pseudo": "Michel", "score": "110"}];
  refresh_score(JSON.parse(JSON.stringify(localStorage.scoress)));
}


function refresh_score(scores) {
  var result = "";
  if (scores === null)
    result = result + "<p>Vous n'avez pas encore enregistré de score :(</p>";
  else {//Build a scores table
    result = result + "<table data-role='table' class='ui-responsive'><thead><tr><th>Pseudo</th><th>Scores</th></tr></thead><tbody>";
    for(var i=0; i<scores.length; i++)
      result = result + "<tr><td>" + scores[i]["pseudo"] + "</td><td>" + scores[i]["score"] + "</td></tr>";
    result = result + "</tbody></table>";
  }
  document.getElementById("scores_result").innerHTML = result;
}


document.getElementById("refresh_score").onclick = function(){
  set_score();
};

function add_score(pseudo, score) {

}
