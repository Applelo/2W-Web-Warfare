var score = 0;
var cpt = 0;
var partieFin = 0;
var pseudo = "";
var sameCard = 0;
var choose_music = ["Bad Reputation", "Duel", "Better Hand", "Don't Let Your Guard Down", "On a Roll"];
var the_music = aleatoire(5) - 1;
var img_legendaire = ["LegendaireBits", "LegendaireSvg", "LegendaireColor"];
var img_epic = ["HTMLform", "HTMLnav", "HTMLtableau","HTMLvideo"];
var img_basic = ["HTMLcode","HTMLprogress", "HTMLa", "HTMLhr", "HTMLbr", "HTMLdiv", "HTMLh1", "HTMLimg", "HTMLp", "HTMLsup",
"CSSalign", "CSStext_decoration", "CSSback", "CSScolor", "CSSfont"];
var nbr_cards = 24;
var translate = {};
var previous_card= "";

create_sound("the_music","m&s/music/" + choose_music[the_music] + ".mp3", "music", false);
musics["the_music"].play();

musics["the_music"].on('end', function(){
  the_music = aleatoire(5) - 1;
  create_sound("the_music","m&s/music/" + choose_music[the_music] + ".mp3", "music", false);
  musics["the_music"].play();
});

create_sound("play_card_from_hand_1","m&s/sound/card/play_card_from_hand_1.mp3", "sound", false);
create_sound("play_card_from_hand_2","m&s/sound/card/play_card_from_hand_2.mp3", "sound", false);
create_sound("play_card_from_hand_3","m&s/sound/card/play_card_from_hand_3.mp3", "sound", false);
create_sound("card_mouse_away","m&s/sound/card/card_mouse_away.mp3", "sound", false);
create_sound("card_mouse_over","m&s/sound/card/card_mouse_over.mp3", "sound", false);
create_sound("start_voice","m&s/sound/add_voice/Que la partie commence.mp3", "sound", false);
create_sound("end_voice","m&s/sound/add_voice/Fin de la partie.mp3", "sound", false);
mise();

// target elements with the "draggable" class
interact('.draggable')
    .draggable({
        // enable inertial throwing
        inertia: false,
        // keep the element within the area of it's parent
        restrict: {
            restriction: "#outer-dropzone",
            endOnly: true,
            elementRect: {
                top: 0,
                left: 0,
                bottom: 1,
                right: 1
            }
        },
        max: 1,

        // call this function on every dragmove event
        onmove: dragMoveListener
        // call this function on every dragend event

    });

interact('.draggable').on('dragend', dragLeaveListener);

function dragLeaveListener(event) {
  var target = event.target;

  // update the posiion attributes
  target.setAttribute('data-x', 0);
  target.setAttribute('data-y', 0);

}

function dragMoveListener(event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
    // translate the element
    target.style.webkitTransform =
        target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';
        event.target.style.height="120%";
    $(document).mouseup(function(){
      event.target.style.webkitTransform =
  event.target.style.transform =
      'translate(' + 0 + 'px, ' + 0 + 'px)';
      event.target.style.height="90%";
    });

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

// $('.draggable').mouseup(function(){
//   target.setAttribute('data-x', 0);
//   target.setAttribute('data-y', 0);
// });

interact('.dropzone').dropzone({
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.5,
    ondrop: function(event) {
      var getCard = event.relatedTarget.getAttribute("card");
        if (getCard == "CSSback"){
            score_f = CSSbackground();
        }
        else if (getCard == "HTMLp"){
          score_f = HTMLp();
        }
        else if (getCard == "HTMLprogress"){
          score_f  = HTMLprogress();
        }
        else if (getCard == "CSStext_decoration"){
          score_f  = CSStext_decoration();
        }
        else if (getCard == "CSSfont"){
          score_f  =CSSfont();
        }
        else if (getCard == "HTMLvideo"){
          score_f  =HTMLvideo();
        }
        else if (getCard == "CSSalign"){
          score_f =CSStextalign();
        }
        else if (getCard == "CSScolor"){
          score_f =CSScolor();
        }
        else if (getCard == "HTMLa"){
          score_f =HTMLa();
        }
        else if (getCard == "HTMLhr"){
          score_f = HTMLhr();
        }
        else if (getCard == "HTMLbr"){
          score_f = HTMLbr();
        }
        else if (getCard == "HTMLdiv"){
          score_f  =HTMLdiv();
        }
        else if (getCard == "HTMLform"){
        score_f =  HTMLform();
        }
        else if (getCard == "HTMLh1"){
          score_f =HTMLh1();
        }
        else if (getCard == "HTMLimg"){
          score_f = HTMLimg();
        }
        else if (getCard == "HTMLnav"){
          score_f = HTMLnav();
        }
        else if (getCard == "HTMLsup"){
          score_f = HTMLsup();
        }
        else if (getCard == "HTMLtableau"){
          score_f  =HTMLtable();
        }
        else if (getCard == "HTMLcode"){
          score_f =HTMLcode();
        }
        else if (getCard == "LegendaireBits"){
          score_f = LegendaireBits();
        }
        else if (getCard == "LegendaireSvg"){
          score_f = LegendaireSvg();
        }
        else if (getCard == "LegendaireColor"){
          score_f = LegendaireColor();
        }
        else {
          alert("doesn't exist");
        }
        var actual_card="";
        if (getCard.indexOf("HTML") >= 0)
          actual_card = "HTML";
        else if (getCard.indexOf("CSS") >= 0)
          actual_card = "CSS";
        else
          actual_card = "";

        if (previous_card != actual_card)
          score = score + score_f;
        if (getCard.indexOf("HTML") >= 0)
          previous_card = "HTML";
        else if (getCard.indexOf("CSS") >= 0)
          previous_card = "CSS";
        else
          previous_card = "";

        partieFin++;


          document.getElementById("display_score_value").innerHTML = score;
          cpt++;
          event.relatedTarget.outerHTML= "";//Remove card
        if(cpt == 6){
          document.getElementById("cards").innerHTML = "<button id='pioche'>Pioche</button>";
          document.getElementById("pioche").addEventListener("click", pioche);
        }
        if(partieFin == 24){
          sounds["end_voice"].play();
          var pseudo = null;
          while (pseudo == null) {
            pseudo = prompt("Vous avez fini la partie votre score est de " + score + " points, veuillez saisir une pseudo pour enregistrer votre score");
          }
          add_score(pseudo, score);
          window.location.replace('./main.html');
        }
      },
});

function pioche(){
  var i = 0;
  var old_card = "";
  var card = "";
  while (i < 6) {
    var drop_luck = aleatoire(10);
    if (drop_luck <= 6)//Basique
      card = img_basic[Math.floor(Math.random()*img_basic.length)];
    else if (drop_luck >= 7 && drop_luck <= 9)//Epique
      card = img_epic[Math.floor(Math.random()*img_epic.length)];
    else//Legendaire
      card = img_legendaire[Math.floor(Math.random()*img_legendaire.length)];

    if (old_card != card) {
      document.getElementById("cards").innerHTML += "<img id='drag' card='"+ card +"' class='draggable drag-drop' src='img/Carte/carte" + card + ".png'>";
      i++;
      nbr_cards--;
    }
    old_card = card;
  }
  sounds["play_card_from_hand_" + aleatoire(3)].play();
  cpt = 0;
  document.getElementById("pioche").outerHTML= "";
}


function mise() {
  sounds["start_voice"].play();
  var i = 0;
  var old_card = "";
  var card = "";
  while (i < 4) {
    card = img_basic[Math.floor(Math.random()*img_basic.length)];
    if (old_card != card) {
      document.getElementById("cards").innerHTML += "<img id='drag' card='"+ card +"' class='draggable drag-drop' src='img/Carte/carte" + card  + ".png'>";
      i++;
      nbr_cards--;
    }
    old_card = card;
  }
  i = 0;
  old_card = "";
  while (i < 2) {
    card = img_epic[Math.floor(Math.random()*img_epic.length)];
    if (old_card != card) {
      document.getElementById("cards").innerHTML += "<img id='drag' card='"+ card +"' class='draggable drag-drop' src='img/Carte/carte" + card  + ".png'>";
      i++;
      nbr_cards--;
    }
    old_card = card;
  }
}

set_volume_setting();
