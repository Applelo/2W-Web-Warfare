var score = 0;
var choose_music = ["Bad Reputation", "Duel", "Better Hand", "Don't Let Your Guard Down", "On a Roll"];
var the_music = aleatoire(5) - 1;
var img_legendaire = ["LegendaireBits", "LegendaireMAP"];
var img_epic = ["HTMLform", "HTMLnav", "HTMLtableau","HTMLvideo"];
var img_basic = ["CSStext_decoration","HTMLprogress","CSSalign", "CSSback", "CSScolor", "CSSfont", "HTMLa", "HTMLhr", "HTMLbr", "HTMLdiv", "HTMLh1", "HTMLimg", "HTMLp", "HTMLsup"];
var nbr_cards = 24;

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

function dragMoveListener(event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
    // translate the element
    target.style.webkitTransform =
        target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}
var cpt = 0;

interact('.dropzone').dropzone({
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.25,
    ondrop: function(event) {
      var getCard = event.relatedTarget.getAttribute("card");
        if (getCard == "CSSback")
          CSSbackground();
        else if (getCard == "HTMLp")
          HTMLp();
        else if (getCard == "HTMLprogress")
          HTMLprogress();
        else if (getCard == "CSStext_decoration")
          CSStext_decoration();
        else if (getCard == "CSSfont")
          CSSfont();
        else if (getCard == "HTMLvideo")
          HTMLvideo();
        else if (getCard == "CSSalign")
          CSStextalign();
        else if (getCard == "CSScolor")
          CSScolor();
        else if (getCard == "HTMLa")
          HTMLa();
        else if (getCard == "HTMLhr")
          HTMLhr();
        else if (getCard == "HTMLbr")
          HTMLbr();
        else if (getCard == "HTMLdiv")
          HTMLdiv();
        else if (getCard == "HTMLform")
          HTMLform();
        else if (getCard == "HTMLh1")
          HTMLh1();
        else if (getCard == "HTMLimg")
          HTMLimg();
        else if (getCard == "HTMLnav")
          HTMLnav();
        else if (getCard == "HTMLsup")
          HTMLsup();
        else if (getCard == "HTMLtableau")
          HTMLtable();
        else
          alert("doesn't exist");

          cpt++;
          event.relatedTarget.outerHTML= "";//Remove card
        if(cpt >= 6){
          document.getElementById("cards").innerHTML = "<button id='pioche'>Pioche</button>";
          document.getElementById("pioche").addEventListener("click", pioche);
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
