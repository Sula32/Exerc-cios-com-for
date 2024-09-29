/* Escreva um programa que use um loop for para imprimir os primeiros 10 termos da sequência de Fibonacci. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)*/

const prompt = require("prompt-sync")();


let numero = 10;
let fibon = [0, 1]; 


for (let i = 2; i < n; i++) {
    fibon[i] = fibon[i - 1] + fibon[i - 2]; }


for (let i = 0; i < n; i++) {
    console.log(fibon[i]);
}