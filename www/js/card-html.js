/*a : insère un lien*/
function HTMLa() {
  document.getElementById("outer-dropzone").innerHTML = document.getElementById("outer-dropzone").innerHTML + "<a href='#'>Cliquez ici</a>";
}

/*hr : insère une barre*/
function HTMLhr() {
  document.getElementById("outer-dropzone").innerHTML = document.getElementById("outer-dropzone").innerHTML + "<hr/>";
}

/*div : ajoute une div*/
function HTMLdiv() {
  document.getElementById("outer-dropzone").innerHTML = document.getElementById("outer-dropzone").innerHTML + "<div></div>";
}

/*form : ajoute un formulaire de contact*/
function HTMLform() {
  document.getElementById("outer-dropzone").innerHTML = document.getElementById("outer-dropzone").innerHTML + "<form>Email :<br><input type='email' name='email' placeholder='Email'><br>Nom :<br><input type='text' name='nom' placeholder='Nom'><br>Message :<br><textarea placeholder='Message'></textarea><br><br><input type='submit' value='Submit'></form>";
}

/*h1 : ajoute un titre de premier niveau*/
function HTMLh1() {
  document.getElementById("outer-dropzone").innerHTML = document.getElementById("outer-dropzone").innerHTML + "<h1>Titre de premier niveau</h1>";
}

/*img : ajoute une image de petit chat trop mignon*/
function HTMLimg() {
  document.getElementById("outer-dropzone").innerHTML = document.getElementById("outer-dropzone").innerHTML + "<img src='img/Chats/" + aleatoire(5) + ".png'>";
}

/*nav : ajoute une nav*/
function HTMLnav() {
  document.getElementById("outer-dropzone").innerHTML = document.getElementById("outer-dropzone").innerHTML + "<nav><a href='#'>HTML</a> |<a href='/css/'>CSS</a> | <a href='#'>JavaScript</a> | <a href='#'>jQuery</a></nav>";
}

/*sup : insère un texte en exposant*/
function HTMLsup() {
  document.getElementById("outer-dropzone").innerHTML = document.getElementById("outer-dropzone").innerHTML + "<sup>Exposant</sup>";
}

/*p : insère un paragraphe avec du lorem ipsum*/
function HTMLp() {
  document.getElementById("outer-dropzone").innerHTML = document.getElementById("outer-dropzone").innerHTML + "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis lorem vel feugiat finibus. Fusce eget pellentesque ipsum. Cras eget interdum erat, eu elementum eros. Aliquam non malesuada dui. Sed nulla tellus, tincidunt sit amet consequat eu, tempus dignissim velit. Pellentesque aliquam orci eget luctus lacinia. Proin tortor eros, scelerisque feugiat purus vitae, auctor fringilla libero.</p>";
}
