// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//prompt scelta utente
var sceltaAzzardo = prompt("pari o dispari?");
var giocataVincente;
if(sceltaAzzardo = "pari"){
    giocataVincente = (% === 2) 
} else {
    giocataVincente = (! % === 2)
}
console.log(sceltaAzzardo)
var numeroUtente = parseInt(prompt("scegli un numero da 1 a 5"));
if (Number.isNaN(numeroUtente) || (numeroUtente > 5) || (numeroUtente < 1)){
    console.log ("il numero scelto non è valido");
} else {
    var numeroMacchina = Math.ceil(Math.random()*6);
}
