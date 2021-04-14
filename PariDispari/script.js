// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//prompt scelta utente
var sceltaAzzardo = prompt("pari o dispari?");
sceltaAzzardo = sceltaAzzardo.toLocaleLowerCase();
//validazione pari o dispari 
if (sceltaAzzardo === "pari" || sceltaAzzardo === "dispari") {
    //richiesta numero ad utente
    var numeroUtente = parseInt(prompt("scegli un numero da 1 a 5"));
    console.log(numeroUtente);
    //validazione numero utente
    if (Number.isNaN(numeroUtente) || (numeroUtente > 5) || (numeroUtente < 1)) {
        console.log("il numero scelto non è valido");
        alert("il numero scelto non è valido");
    } else {
        giocoPariDispari(numeroUtente, sceltaAzzardo);
    }
} else {
    alert("per giocare devi scrivere 'pari' o 'dispari'");
    document.getElementById("risultato-vincita").innerHTML = vincitore;
}
//creo una funzione per generare il numero random
function numRandom() {
    var numeroMacchina = Math.ceil(Math.random() * 6);
    console.log(numeroMacchina);
    return numeroMacchina;
}
//a questo punto creo una funzione per fare il gioco: ho scelta parola utente, scelta numero utente e il numero random - sommo e verifico pari o dispari


function giocoPariDispari(numUser, wordUser) {
    var somma = numRandom() + numUser;
    console.log(somma);
    var vincitore;
    //fatta somma random + numero utente verifico le 4 condizione
    if (somma % 2 === 0 && wordUser === "pari") {
        console.log( vincitore + somma + "vince");
        vincitore = "hai giocato " + numUser + " la macchina gioca " + numRandom + "hai vinto la somma è pari";
        return vincitore;

    } else if (somma % 2 === 0 && wordUser === "dispari"){
        vincitore = "hai giocato " + numUser + " la macchina gioca " + numRandom + "hai perso la somma è dispari";
        console.log( vincitore + somma + "perde");
        return vincitore;

    } else if (somma % 2 !== 0 && wordUser === "dispari" ){
        vincitore = "hai giocato " + numUser + " la macchina gioca " + numRandom + "hai vinto la somma è dispari";
        console.log(  vincitore + somma + "vince");
        return vincitore;

        //else: somma % 2 !== 0 && wordUser === "pari"
    } else { 
        vincitore = "hai giocato " + numUser + " la macchina gioca " + numRandom + "hai perso la somma è dispari";
        console.log( vincitore + somma + "perde");
        return vincitore;
    }
}






// controlloSommaPariODispari(numeroUtente, numeroMacchina);

// //Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// function controlloSommaPariODispari(num1, num2) {
//     var somma = num1 + num2;
//     var sommaPari;
//     if ((somma % 2) === 0) {
//         sommaPari = true;
//         console.log("la somma dei due numeri è pari");
//     } else {
//         console.log("la somma dei due numeri è dispari");
//     }
// }



