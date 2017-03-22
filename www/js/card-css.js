var text_align = ["right", "left", "center", "justify"];
var font_family = ["Arial", "Courrier", "Times New Roman", "Helvetica", "Comic Sans MS"];


/*background : change le background d'un élément*/
function CSSbackground() {
  document.getElementById("outer-dropzone").style.backgroundColor = "rgb(" + aleatoire(255) + "," + aleatoire(255) + "," + aleatoire(255) + ")";
}

/*text-align : aligne le texte à droite*/
function CSStextalign() {
  document.getElementById("outer-dropzone").style.textAlign = text_align[aleatoire(4)-1];
}

/*color : change la couleur des éléments en rouge*/
function CSScolor() {
  document.getElementById("outer-dropzone").style.color = "rgb(" + aleatoire(255) + "," + aleatoire(255) + "," + aleatoire(255) + ")";
}

/*text-decoration : souligne le texte*/
function CSStext_decoration() {
  document.getElementById("outer-dropzone").style.textDecoration = "underline";
}

/*font-family : change la font */
function CSSfont() {
  document.getElementById("outer-dropzone").style.fontFamily =  font_family[aleatoire(5)-1];
}

/*border-style : ajoute une bordure */
function CSSborder(){
  document.getElementById("outer-dropzone").style.border = "dotted";
}

/*text-shadow : ajout d'une ombre */
function CSSshadow(){
  document.getElementById("outer-dropzone").style.textShadow = "4px";
}
