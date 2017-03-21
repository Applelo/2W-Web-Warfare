var score = 0;
var choose_music = {1:"2-02 Tricks of the Trade", 2:"2-03 Two Rogues, One Mark", 3:"2-05 Playing with a Full Deck", 4:"2-06 Awash in Ale, but Nary a Mug", 5:"2-08 Tabletop Battles"};
var img_legendaire = ["LegendaireBits", "LegendaireMAP"];
var img_epic = ["CSSposition", "CSSdisplay", "HTMLform", "HTMLnav", "HTMLtableau"];
var img_basic = ["CSSalign", "CSSback", "CSScolor", "CSSfont", "HTMLa", "HTMLbarre", "HTMLbr", "HTMLdiv", "HTMLform", "HTMLh1", "HTMLimg", "HTMLnav", "HTMLp", "HTMLsup", "HTMLtableau"];

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
          CSSdisplay();
        else if (getCard == 6)
          HTMLnav();
        else if (getCard == 7)
          CSSfont();
        else if (getCard == 8)
          HTMLhr()
        else if (getCard == 9)
          HTMLh1();
          event.relatedTarget.outerHTML= "";//Remove card
      },
});

function mise() {
  element = document.getElementById("cards");
  element.innerHTML = element.innerHTML + "<img src='img/Carte/carte" + test + ".png'>";
}

create_sound("m&s/music/" + choose_music[aleatoire(5)-1] + ".mp3", "music", true);
set_volume_setting();
