document.getElementById("exit_app").onclick = function(){
  navigator.app.exitApp();
  localStorage.paramIntro = null;
};

function aleatoire(N) {
  return (Math.floor((N)*Math.random()+1));
}
