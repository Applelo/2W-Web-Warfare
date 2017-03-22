/*a : insère un lien*/
function HTMLa() {
  document.getElementById("outer-dropzone").innerHTML = document.getElementById("outer-dropzone").innerHTML + "<a href='#'>Cliquez ici</a>";
}

/*hr : insère une barre*/
function HTMLhr() {
  document.getElementById("outer-dropzone").innerHTML = document.getElementById("outer-dropzone").innerHTML + "<hr/>";
}

/*br : insère un saut de ligne*/
function HTMLbr() {
  document.getElementById("outer-dropzone").innerHTML = document.getElementById("outer-dropzone").innerHTML + "<br>";
}


/*div : ajoute une div*/
function HTMLdiv() {
  document.getElementById("outer-dropzone").innerHTML = document.getElementById("outer-dropzone").innerHTML + "<div>Div</div>";
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
  document.getElementById("outer-dropzone").innerHTML = document.getElementById("outer-dropzone").innerHTML + "<img src='img/Chat/" + aleatoire(5) + ".jpg'>";
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

/* table : insère un tableau */
function HTMLtable(){
  document.getElementById("outer-dropzone").innerHTML = document.getElementById("outer-dropzone").innerHTML + "<table><tr><th>Eéments</th><th>Valeurs</th></tr><tr><td>Chiffre d'affaires</td><td>734900€</td></tr><tr><td>- coût variable</td><td>257215€</td></tr><tr><td>= marge / cout variable </td><td>477685€</td></tr><tr><td> - coût fixe </td><td>420045€</td></tr><tr><td> Résultat</td><td>57640€</td></tr><tr><td> SR </td><td>646223€</td></tr><tr><td> SRq</td><td> ******</td></tr><tr><td> Point mort </td><td>316</td></tr></table>";
}

/* map : insère une map */
function HTMLvideo(){
  document.getElementById("outer-dropzone").innerHTML = document.getElementById("outer-dropzone").innerHTML + '<video width="320" height="240" autoplay><source src="video/vache.mp4" type="video/mp4"></video>';
}

/* progress : insère une barre de progression */
function HTMLprogress(){
  document.getElementById("outer-dropzone").innerHTML = document.getElementById("outer-dropzone").innerHTML + "<progress value='56' max='100'></progress>";
}
