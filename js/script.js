// Esercizio 1
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
// Usate prima i console.log se funziona tutto stampate a schermo con jQuery,
// fatto questo provate ad usare Handlebars


$(document).ready(
  function() {

  var studente = {
    'nome' : 'Mario',
    'cognome' : 'Rossi',
    'eta' : 22,
  };

  for (var key in studente) {
    console.log(studente[key]);
  };


  var studenti = [
    {
      'nome' : 'Mario',
      'cognome' : 'Rossi',
      'eta' : 22,
    },
    {
      'nome' : 'Pippo',
      'cognome' : 'Neri',
      'eta' : 23,
    },
    {
      'nome' : 'paperino',
      'cognome' : 'verdi',
      'eta' : 24,
    },
    {
      'nome' : 'paperino',
      'cognome' : 'verdi',
      'eta' : 24,
    }
  ];


  for (var key in studenti) {
    console.log(studenti[key].nome);
    console.log(studenti[key].cognome);
    studenti[key].matricola = 283762;
    console.log(studenti[key].matricola);
  };
  console.log(studenti);

  var nome = prompt('inserisci un nome');
  var cognome = prompt('inserisci un cognome');
  var eta = prompt('inserisci l\'eta');

 var object = {};

 object.nome = nome;
 object.cognome = cognome;
 object.eta = eta;

 for (var key in object) {
   console.log(object[key]);

 }

 studenti.push(object);

 console.log(studenti);




});
