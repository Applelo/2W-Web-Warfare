function loop(){

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
        // enable autoScroll
        autoScroll: true,

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

function nameClick() {
    var nameDrag = this.id;
    console.log(nameDrag);
    return nameDrag;
}

var inputs = document.getElementsByTagName("img");
for (var i = 0; i < inputs.length; i++) {
    var nameTag = inputs[i].addEventListener("click", nameClick);
}

nameDrag = nameClick();

console.log(nameDrag);
if(nameDrag == "drag-1"){
//DROPZONE
interact('.dropzone').dropzone({

    // only accept elements matching this CSS selector
    accept: '#' + nameDrag + '',

    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,


    ondrop: function(event) {
          document.getElementById("outer-dropzone").style.backgroundColor = "red";
      },

});
}
else if (nameDrag == "drag-2") {
  interact('.dropzone').dropzone({

      // only accept elements matching this CSS selector
      accept: '#' + nameDrag + '',

      // Require a 75% element overlap for a drop to be possible
      overlap: 0.75,

      ondrop: function(event) {
            document.getElementById("outer-dropzone").innerHTML = "<p> qsdlmkfn qsidyfgiuyqs dbfnsqokjhbijknbgiuoqh ghhdfug </p>";
        },

  });
}
setInterval(loop,10000);
}
loop();
