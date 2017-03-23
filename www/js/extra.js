document.getElementById("exit_app").onclick = function(){
  navigator.app.exitApp();
};

function aleatoire(N) {
  return (Math.floor((N)*Math.random()+1));
}
