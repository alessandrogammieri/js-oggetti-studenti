/* Creare un oggetto che descriva uno studente con le seguenti proprietà: nome,
cognome e età. Stampare a schermo attraverso il for in tutte le proprietà. */

// Dichiarazione variabili
var student, print, display = " ";

// Oggetto studente
student = {
  firstName: "Mario",
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

// Dichiarazione variabili
var school, key, stamp = " ";

// Oggetti di studenti
student1 = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 45
};

student2 = {
  firstName: "Luca",
  lastName: "Bianchi",
  age: 35
};

student3 = {
  firstName: "Maria",
  lastName: "Verdi",
  age: 28
};

// Array di oggetti di studenti
school = [student1, student2, student3];

// Ciclo for
for (var i = 0; i < school.length; i++) {
  console.log(school[i].firstName, school[i].lastName);
  stamp = stamp + school[i].firstName + school[i].lastName + " ";
}

// Stampiamo a schermo
document.getElementById('tuo_id').innerHTML = stamp;


/* Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo
oggetto studente inserendo nell’ordine: nome, cognome e età. */

// Dichiarazione variabili
var firstname, lastname, age, ripetente, key, asino = " ";

// Prompt dell'utente
firstname = prompt("Inserisci qui il tuo nome");
lastname = prompt("Inserisci qui il tuo cognome");
age = prompt("Inserisci qui la tua età");

// Oggetto ripetente
ripetente = {
  firstName: "",
  lastName: "",
  age: ""
};

// Popola l'oggeto ripetente
ripetente.firstName = firstname;
ripetente.lastName = lastname;
ripetente.age = age;

// Ciclo for/in
for (key in ripetente) {
  console.log(ripetente[key]);
  asino = asino + ripetente[key] + " ";
}

// Stampiamo a schermo
document.getElementById('suo_id').innerHTML = asino;
