const prezzoAlKm = 0.21;
const scontoMinorenni = 0.2;
const scontoOver65 = 0.4;
const btnGenera = document.getElementById('genera');
const numeroCarrozza = Math.floor(Math.random() * 10 + 1);
const codiceCp = Math.random()*10000;

//al click mi genera il mio biglietto
btnGenera.addEventListener('click', generaPrezzo);

function generaPrezzo() {

  // Data
  const nomeCognome = document.getElementById('nome-cognome').value;
  const numeroKm = document.getElementById('km').value;
  const fasciaEta = document.getElementById('fascia-eta').value;
  let prezzoFinale;
  let tipoBiglietto;

  // Logic
  const prezzoBiglietto = numeroKm * prezzoAlKm ;
  if (fasciaEta === 'minorenne') {
    prezzoFinale  = prezzoBiglietto * (1 - scontoMinorenni);
    tipoBiglietto = 'Biglietto minorenni';
  } else if (fasciaEta === 'over65') {
    prezzoFinale  = prezzoBiglietto * (1 - scontoOver65);
    tipoBiglietto = 'Biglietto Over65';
  } else {
    prezzoFinale  = prezzoBiglietto;
    tipoBiglietto = 'Biglietto Standard';
  }


  // Show
  document.getElementById('nome').innerHTML=`
    <strong> ${nomeCognome} </strong>
  `;

  document.getElementById('offerta').innerHTML= `
    ${tipoBiglietto}
  `;

  document.getElementById('n-carrozza').innerHTML=`
    ${numeroCarrozza}
  `;
  
  document.getElementById('codice').innerHTML= `
    ${codiceCp.toFixed(0)}
  `;

  document.getElementById('costo').innerHTML= `
    ${prezzoFinale.toFixed(2)}€
  `;
}




