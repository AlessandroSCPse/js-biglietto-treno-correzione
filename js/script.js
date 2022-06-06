// Il programma dovrà chiedere all'utente il numero 
// di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare 
// il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km) 
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana 
// (con massimo due decimali, per indicare centesimi sul prezzo).

// Chiedere all'utente km e età
const userKm = parseInt( prompt('Dimmi quanti km devi percorrere') );
const userAge = parseInt( prompt('Dimmi la tua età') );

// Calcolo il prezzo standard pieno
let price = userKm * 0.21;

// METODO SOVRASCRIVENDO LA STESSA VARIABILE
// if(userAge < 18) {
//     price = price - (price * 20 / 100);
// } else if(userAge > 65) {
//     price = price - (price * 40 / 100);
// }

// const humanPrice = price.toFixed(2);
// document.getElementById('user-message').innerHTML = `Il prezzo del tuo biglietto è ${humanPrice} €`;

// ALTRO MODO CON VARIABILE DISCOUNT
let discount = 0;

// Se l'utente ha meno di 18 anni levo il 20% al prezzo pieno
// Altrimenti se l'utente ha più di 65 anni levo il 40% al prezzo pieno
// Ottengo il prezzo finale
if(userAge < 18) {
    discount = price * 20 / 100;
} else if(userAge > 65) {
    discount = price * 40 / 100;
}

const finalPrice = price - discount;

// Stampo il prezzo finale in forma umana
const humanPrice = finalPrice.toFixed(2);
document.getElementById('user-message').innerHTML = `Il prezzo del tuo biglietto è ${humanPrice} €`;