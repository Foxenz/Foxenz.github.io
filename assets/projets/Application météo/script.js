let ville = 'Paris';
recevoirTempérature(ville);

let changerDeVille = document.getElementById('changer');
changerDeVille.addEventListener("click", () => {
  ville = prompt("Quelle ville souhaitez-vous voir ?");
  recevoirTempérature(ville);
});

function recevoirTempérature(ville){
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=cc449ac0507cf1a08a1b3b22c3706ab8&units=metric';
  let requete = new XMLHttpRequest(); 
  requete.open("GET", url);
  requete.responseType = "json";
  requete.send();

  requete.onload = function(){
    if(requete.readyState === XMLHttpRequest.DONE){
      if(requete.status === 200){
        let reponse = requete.response;
        let température = reponse.main.temp;
        let ville = reponse.name;
        document.querySelector("#temperature_label").textContent = température; 
        document.querySelector("#ville").textContent = ville; 
      }
      else{
        alert("Un problème est intervenu, merci de revenir plus tard");
      }
    }
  }
}
