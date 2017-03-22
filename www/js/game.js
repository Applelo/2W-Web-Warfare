var score = 0;
var choose_music = ["Bad Reputation", "Duel", "Better Hand", "Don't Let Your Guard Down", "On a Roll"];
var the_music = aleatoire(5) - 1;
var img_legendaire = ["LegendaireBits", "LegendaireMAP"];
var img_epic = ["HTMLform", "HTMLnav", "HTMLtableau"];
var img_basic = ["CSStext_decoration","HTMLvideo","HTMLprogress","CSSalign", "CSSback", "CSScolor", "CSSfont", "HTMLa", "HTMLhr", "HTMLbr", "HTMLdiv", "HTMLform", "HTMLh1", "HTMLimg", "HTMLnav", "HTMLp", "HTMLsup", "HTMLtableau"];

create_sound("the_music","m&s/music/" + choose_music[the_music] + ".mp3", "music", false);
musics["the_music"].play();

musics["the_music"].on('end', function(){
  the_music = aleatoire(5) - 1;
  create_sound("the_music","m&s/music/" + choose_music[the_music] + ".mp3", "music", false);
});

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
        onmove: dragMoveListener,
        // call this function on every dragend event

    });

function dragMoveListener(event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
    target.style.height = "120%";
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

          cpt++;
          event.relatedTarget.outerHTML= "";//Remove card
        if(cpt >= 6){
          document.getElementById("cards").innerHTML = "<button id='pioche'>Pioche</button>  ";
          document.getElementById("pioche").addEventListener("click", pioche);
        }
      },
});

function pioche(){
    var card = img_basic[Math.floor(Math.random()*img_basic.length)];
    alert(card);
    document.getElementById("cards").innerHTML = "<img id='drag' card='"+ card +"' class='draggable drag-drop' src='img/Carte/carte" + card  + ".png'>";
}


function mise() {
  element = document.getElementById("cards");
  element.innerHTML = element.innerHTML + "<img src='img/Carte/carteHTMLvideo.png'>";
}

set_volume_setting();
