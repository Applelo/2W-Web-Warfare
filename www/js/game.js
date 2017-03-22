var score = 0;
var choose_music = ["Bad Reputation", "Duel", "Better Hand", "Don't Let Your Guard Down", "On a Roll"];
var the_music = aleatoire(5) - 1;
var img_legendaire = ["LegendaireBits", "LegendaireMAP"];
var img_epic = ["CSSposition", "CSSdisplay", "HTMLform", "HTMLnav", "HTMLtableau"];
var img_basic = ["CSSalign", "CSSback", "CSScolor", "CSSfont", "HTMLa", "HTMLbarre", "HTMLbr", "HTMLdiv", "HTMLform", "HTMLh1", "HTMLimg", "HTMLnav", "HTMLp", "HTMLsup", "HTMLtableau"];

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

interact('.dropzone').dropzone({

    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,
    ondrop: function(event) {
      var getCard = event.relatedTarget.getAttribute("card");
        if (getCard == 1)
          CSSbackground();
        else if (getCard == 2)
          HTMLp();
        else if (getCard == 3)
          CSScolor();
        else if (getCard == 4)
          CSStext_decoration();
        else if (getCard == 5)
          CSSfont();
        else if (getCard == 6)
          HTMLvideo();
          event.relatedTarget.outerHTML= "";//Remove card
      },
});

function mise() {
  element = document.getElementById("cards");
  element.innerHTML = element.innerHTML + "<img src='img/Carte/carte" + test + ".png'>";
}

set_volume_setting();
