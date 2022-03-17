/*
    Snack3
    Il software deve chiedere per 5 volte all’utente di inserire un numero.
    Il programma stampa la somma di tutti i numeri inseriti.
*/
let sum = 0;
let outputSum = document.getElementById("sum");

let i = 0;
while (i < 5) {
    let n = parseInt(prompt("Inserisci un numero..."));
    sum += n;
    i++;
}

console.log(sum);
outputSum.innerHTML = `La somma dei 5 numeri è ${sum}`