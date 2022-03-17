/*
    Snack1
    Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
    Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
    la somma degli elementi è minore di 50.
*/

const numbers = [];
let sum = 0;

do {
    let num = parseInt(prompt("Inserisci un numero da mettere nell'array"));
    sum += num;
    numbers.push(num);
} while (sum < 50);

console.log(numbers);
console.log(sum);