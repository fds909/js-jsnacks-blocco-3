/*
    Snack4 (Bonus)
    In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
    chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
    Interrompi il ciclo appena il nome è stato trovato.
*/

const invitati = ["Pippo Franco", "James Brown", "Claudio Bisio"];
let message = document.getElementById("message");

const nome = prompt("Qual è il tuo nome?");
let found = false;

let i = 0;
while ( found == false && i < invitati.length) {
    if (invitati[i] == nome) {
        found = true;
    }

    i++;
}

if (found == true) {
    message.innerHTML = "Sei nella lista: puoi partecipare alla festa.";
} else {
    message.innerHTML = "NON sei nella lista: NON puoi partecipare alla festa.";
}
