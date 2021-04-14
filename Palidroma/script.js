// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


//prompt utente : inserire una parola
var parolaUtente = prompt("inserisci una parola per verificare se è palindroma");
console.log(parolaUtente);
//verificare che la parola sia accettata 
function validazioneParola(parolaUtente) {
    var NumeriNonAccettati = parseInt(parolaUtente);
    //se ritorna NaN non è un numero
    if (!Number.isNaN(NumeriNonAccettati)) {
        return false
    }
    return true
}
if (!validazioneParola(parolaUtente)) {
    console.log("sono accettate solo parole")
} else {
    console.log("la parola scritta " + parolaUtente + " è accetta e verrà analizzata dalla funzione");
    var stampaRisultato;
    if(parolaPalindroma(parolaUtente)){
        stampaRisultato = "La parola " + parolaUtente + " e\' palindroma"
        console.log("palindroma");
    } else {
        stampaRisultato = "La parola " + parolaUtente + " non e\' palindroma"
        console.log("non palindroma");
    }
    document.getElementById("result-test-palindromo").innerHTML = stampaRisultato;
}



//una funzione per capire se la parola inserita è palindroma
function parolaPalindroma(parola) {
    //lettura parola da sinistra default
    var parolaInversa = ""
    //lettura parola da destra
    for (var j = parola.length - 1; j >= 0; j--) {
        parolaInversa += parola[j];
    }
    return parolaInversa === parola;
}
    

