/*svg: insère une forme svg*/
function LegendaireSvg() {
  taile_cercle = aleatoire(50) + 50;
  document.getElementById("outer-dropzone").innerHTML = document.getElementById("outer-dropzone").innerHTML + "<svg width='" +  taile_cercle + "' height='" +  taile_cercle + "'><circle cx='50' cy='50' r='40' stroke='green' stroke-width='4' fill='yellow' /></svg>";
  return taile_cercle ;
}

/* bits : remplace toute la page par des 0 et 1 */
function LegendaireBits() {
  var numBits = "";
  var aleat = [];
  var numbits_result = 0;
  for (var i = 0; i < 30; i++) {
  for (var j = 0; j < 50; j++) {
    aleat[j] = aleatoire(2)-1;
    numbits_result = numbits_result + aleat[j];
    numBits =  numBits + aleat[j];
  }
  numBits = numBits + "<br>";
  }

  document.getElementById("outer-dropzone").innerHTML = "<p>" +  numBits + "</p>" ;
  return Math.round(numbits_result/10);
}

function LegendaireColor() {
  $("#outer-dropzone").css("background-color", "");
  $("#outer-dropzone").addClass("couleur");
  return 80;
}
