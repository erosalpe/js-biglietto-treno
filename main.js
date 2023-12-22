let età = prompt("inserisci età");
let km = prompt("inserisci i km che vuoi percorrere");
const prezzoAlKm = 0.21;
let prezzo = km * prezzoAlKm;

if (età < 18){
    prezzo = (prezzo - ((20/100) * prezzo)).toFixed(2);
} else if (età >= 65){
    prezzo = (prezzo - ((40/100) * prezzo)).toFixed(2);
} else{
    prezzo = prezzo.toFixed(2);
}

document.getElementById('costo').innerHTML = `${prezzo} €`;
