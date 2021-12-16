// JSnack 1
// Crea un array vuoto e chiedi all’utente un numero da
// inserire nell’array. Continua a chiedere i numeri all’utente e a
// inserirli nell’array fino a quando la somma degli elementi è minore di 50.

// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e
// in verde i numeri pari.

let array = [];
let somma = 0;
let inizio = 0;

do{
    let loop = parseInt(prompt("Inserisci un numero")); 
    array.push(loop);somma = somma + array[inizio];inizio++;

} while (somma < 50);

alert(somma)

