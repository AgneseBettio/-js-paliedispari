// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//prompt scelta utente
var sceltaAzzardo = prompt("pari o dispari?");
var sceltaGiocata;

if (sceltaAzzardo = "pari") {
    sceltaGiocata = controlloSommaPariODispari(numeroUtente, numeroMacchina);   
} else {
    sceltaGiocata = !controlloSommaPariODispari(numeroUtente, numeroMacchina);
}

var vincitore;
document.getElementById("risultato-vincita").innerHTML = vincitore;

var numeroUtente = parseInt(prompt("scegli un numero da 1 a 5"));
if (Number.isNaN(numeroUtente) || (numeroUtente > 5) || (numeroUtente < 1)) {
    console.log("il numero scelto non è valido");
} else {
    var numeroMacchina = Math.ceil(Math.random() * 6);
}


//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function controlloSommaPariODispari(num1, num2) {
    var somma = num1 + num2;
    var sommaPari = false;
    if ((somma % 2) === 0) {
        sommaPari = true;
        console.log("la somma dei due numeri è pari");
    } else {
        console.log("la somma dei due numeri è dispari");
    }
}

// Dichiariamo chi ha vinto.

vincitore =  "hai giocato " + numeroUtente + " la macchina gioca " + numeroMacchina + "hai vinto";