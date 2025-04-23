const readline = require("readline-sync");

let peso = parseFloat(readline.question("Digite seu peso (em kg): "));
let altura = parseFloat(readline.question("Digite sua altura (em metros): "));

let imc = peso / (altura * altura);
console.log("\nSeu IMC é: " + imc.toFixed(2));

if (imc < 18.5) {
    console.log("Você está abaixo do peso.");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Você está com peso normal.");
} else if (imc >= 25 && imc < 30) {
    console.log("Você está acima do peso.");
} else if (imc >= 30 && imc < 40) {
    console.log("Você está com obesidade.");
} else {
    console.log("Você está com obesidade mórbida.");
    
}



