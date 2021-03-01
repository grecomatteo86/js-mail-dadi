//1. genero un numero random da 1 a 6 per il giocatore
var nRandomUtente = Math.floor(Math.random() * 6) + 1;
console.log('il numero random per l\'utente è ' + nRandomUtente);


//2. genero un numero random da 1 a 6 per il computer
var nRandomComputer = Math.floor(Math.random() * 6) + 1;
console.log('il numero random per il computer è ' +nRandomComputer);


//3. stabilisco il vincitore, in base a chi fa il punteggio più alto
if (nRandomUtente > nRandomComputer) {
  alert('ha vinto l\'utente');
} else if (nRandomUtente < nRandomComputer) {
  alert('ha vinto il computer');
} else {
  alert('avete pareggiato');
}
