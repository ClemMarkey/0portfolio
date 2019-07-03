console.log("Le script vient d'être lancé");

let aDeviner = Math.floor(Math.random() * 100);

console.log("L'ordinateur a choisi son nombre secret");

let essai;
let tour = 1;
console.log(`Tour numéro ${tour}. \nEntrez un nombre dans la zone.`);

document.getElementById("submit").addEventListener("click", function () {

    tour +=1;
    console.log(`Tour numéro ${tour}`);

    essai = document.getElementById("input").value;
    console.log(`Vous avez entré le nombre: ${essai}`);

    let diff = essai - aDeviner;
    console.log(`Nombre d'essais: ${tour}`);
    

    if (isNaN(essai)) {
        document.getElementById("hotCold").innerHTML = "On t'a demandé un nombre, connard !";

    } else if (essai <= 0) {
        document.getElementById("hotCold").innerHTML = "Le nombre doit être positif et différent de 0 !";

    } else if (essai > 100){
        document.getElementById("hotCold").innerHTML = "Le nombre doit être inférieur à 100, abruti !";

    } else if (diff == 0) {
        document.getElementById("hotCold").innerHTML = `Gagné ! \nVous avez trouvé le nombre secret ${aDeviner} en ${tour-1} tours !`;
        console.log(`Vous avez gagné en ${tour} tours ! \nFin du script`);
        document.getElementById("jeu").style.display = "none";
        
    } else if (tour === 10) {
        document.getElementById("hotCold").innerHTML = `Perdu ! \nVous n'avez pas trouvé le nombre secret dans le nombre de tours impartis. \nLe nombre secret était: ${aDeviner} !`;
        console.log(`Vous avez perdu ! \nFin du script`);
        document.getElementById("jeu").style.display = "none";

    } else if (diff <= 20 && diff >= -20 ) {
        document.getElementById("hotCold").innerHTML = "C'est chaud";


    } else {document.getElementById("hotCold").innerHTML = "C'est froid";}
})