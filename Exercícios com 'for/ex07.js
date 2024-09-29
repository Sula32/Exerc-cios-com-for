/* Escreva um programa que use um loop do while para contar o número de dígitos de um número fornecido (por exemplo, 12345 tem 5 dígitos).
*/
function contarDigitos(numero) {
    let contador = 0;

     {
        contador++;
        numero = Math.floor(numero / 10); 
    } while (numero > 0);

    return contador;
}

let numero = prompt("Digite um número:");
numero = parseInt(numero, 10); 

if (!isNaN(numero)) {
    let totalDigitos = contarDigitos(numero);
    console.log(`O número ${numero} tem ${totalDigitos} dígitos.`);
} else {
    console.log("digite um número válido.");
}
