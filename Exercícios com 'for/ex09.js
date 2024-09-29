/* Escreva um programa que use um loop do while para imprimir um padrão de estrelas decrescente.*/

let linhas = 5; 
let resultado = ''; 

do {
 
  for (let i = 0; i < linhas; i++) {
    resultado += '*';
}
resultado += '\n'; 
linhas--; 
} while (linhas > 0); 

console.log(resultado);    