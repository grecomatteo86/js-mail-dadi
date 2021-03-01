// esercizio Mail

// 1. scrivo un Array delle mail
var listaMail = ['alessio.vietri@boolean.com','clelia.fradella@boolean.com','samuele.madrigali@boolean.com','matteo.greco@boolean.com'];
console.log(listaMail);

//2. chiedo all’utente la sua email
var mailUtente = prompt('scrivi la tua mail');
var risultato = 0;
console.log('la mail inserita dall\'utente è ' + mailUtente);

//3. controlla che sia nella lista di chi può accedere
for ( var i = 0 ; i < listaMail.length; i++ ){
  console.log(listaMail[i]);
  if (mailUtente == listaMail[i]){
    console.log('ok, puoi accedere');
    risultato = 1;
  }
}

//4. stampa un messaggio appropriato sull’esito del controllo
if (risultato == 1) {
  alert('puoi accedere');
} else {
  alert('non puoi accedere');
}
