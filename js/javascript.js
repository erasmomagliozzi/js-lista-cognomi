// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi,
// stampa la lista ordinata alfabeticamente (in html ul > li).
// Scrivi anche la posizione della lista in cui il nuovo utente si trova.
var listaCognomi = ['Rossi', 'Di Pasquale', 'Ventura', 'Verdi', 'Casale']
console.log(listaCognomi);

var cognome = prompt('Inserisci il tuo cognome');
while(cognome.length <= 0){
  cognome = prompt('Inserisci il tuo cognome');
}
console.log(cognome);
listaCognomi.push(cognome);
console.log(listaCognomi);

for(var i = 0; i < listaCognomi.length; i++){
  document.getElementById("listaOrdinata").innerHTML += '<li>' + listaCognomi[i] + '</li>';
}
listaCognomi.sort();
