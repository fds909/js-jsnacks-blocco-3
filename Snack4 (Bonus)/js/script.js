/*
    Snack4 (Bonus)
    In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
    chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
    Interrompi il ciclo appena il nome è stato trovato.
*/

const invitati = ["Pippo Franco", "James Brown", "Claudio Bisio"];
let message = document.getElementById("message");

const nome = prompt("Qual è il tuo nome?");

if (invitati.includes(nome)) {
    message.innerHTML = "Il tuo nome è in lista. Puoi partecipare alla festa.";
} else {
    message.innerHTML = "Il tuo nome NON è in lista. NON puoi partecipare alla festa.";
}
