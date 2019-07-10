/* Creare un oggetto che descriva uno studente con le seguenti proprietà: nome,
cognome e età. Stampare a schermo attraverso il for in tutte le proprietà. */

// Dichiarazione variabili
var student, print, display = " ";

// Oggetto studente
student = {
  fistName: "Mario",
  lastName: "Rossi",
  age: 45
};

// Ciclo for/in
for (print in student) {
  console.log(student[print]);
  display = display + student[print] + " ";
}

// Stampiamo a schermo
document.getElementById('mio_id').innerHTML = display;


/* Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e
stampare per ognuno nome e cognome */







/* Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo
oggetto studente inserendo nell’ordine: nome, cognome e età. */
