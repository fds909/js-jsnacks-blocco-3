/*
    Snack2
    Fai inserire un numero, che chiameremo N, all’utente. Genera N array,
    ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.
*/

let n = prompt("Inserisci il numero di array");
let container = document.getElementById("container");

let i = 0;
while (i < n) {
    let numbers = [];
    container.innerHTML += `<h3>Array ${i+1}</h3><ul>`;

    let j = 0;
    while (j < 10) {
        let randomNum = Math.floor(Math.random() * 100) + 1;
        numbers.push(randomNum);
        container.innerHTML += `<li>${randomNum}</li>`;
        j++;
    }
    console.log(numbers);
    container.innerHTML += "</ul>";

    i++;
}