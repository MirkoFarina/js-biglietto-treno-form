/*Scrivere (come ieri) un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
Potete usare la vostra logica di ieri oppure rifarla anche in base alla correzione di stamattina
Solo una volta che la logica sarà funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
Allego un possibile layout ma siete liberi di sbizzarrirvi con la vostra fantasia a patto di mantenere gli stessi elementi (sia di input che di output)*/
const nomeCognome = document.getElementById('nome-cognome').value;
const numeroKm = document.getElementById('km').value;
const fasciaEta = document.getElementById('fascia-eta').value;
const prezzoAlKm = 0.21;
const scontoMinorenni = 0.2;
const scontoOver65 = 0.4;
const prezzoBiglietto = numeroKm * prezzoAlKm ;
const btnGenera = document.getElementById('genera');
console.log(btnGenera);
let prezzoFinale;


btnGenera.addEventListener('click', generaPrezzo);

function generaPrezzo (){
  if (fasciaEta === 'minorenne') {
    prezzoFinale = prezzoBiglietto * (1 - scontoMinorenni);
  } else if (fasciaEta === 'over65') {
    prezzoFinale = prezzoBiglietto * (1 - scontoOver65);
  } else {
    prezzoFinale = prezzoBiglietto;
  }
  console.log(prezzoFinale.toFixed(2));
}



