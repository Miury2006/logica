const readline = require("readline-sync");

let idade = parseInt(readline.question("Qual a sua idade? "));
let estudante = readline.question("Você é estudante ou idoso? (s/n) ").toLowerCase();

if (idade < 16) {
    console.log("Entrada não permitida para menores de 16 anos.");


} else if (idade >= 16 && idade <= 18) {
    console.log("Entrada permitida.");
    console.log("Tem direito à meia-entrada.");


} else if (idade > 18 && idade < 65) {
    console.log("Entrada permitida.");


if (estudante.toLocaleLowerCase === "s") {
    console.log("Tem direito à meia-entrada.");
} else {
    console.log("Não tem direito à meia-entrada.");
}


} else if (idade >= 65) {
    console.log("Entrada permitida.");
    console.log("Tem direito à meia-entrada.");
}
