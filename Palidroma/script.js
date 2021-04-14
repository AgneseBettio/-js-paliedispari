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
    if(!Number.isNaN(NumeriNonAccettati)){
        return false
    }
    return true
}
if(!validazioneParola(parolaUtente)){
    console.log ("sono accettate solo parole")
} else { 
    var parolaAnalizzata = parolaUtente;
    console.log("la parola scritta " + parolaUtente + " è accetta e verrà analizzata dalla funzione")
}


    //una funzione per capire se la parola inserita è palindroma
// var verificaParolaDaSinistra;
// var verificaParolaDaDestra;
// function parolaPalindroma( )

