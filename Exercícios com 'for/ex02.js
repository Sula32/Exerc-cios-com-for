/* 2 - Verifique se um número é primo
Escreva um programa que use um loop for para verificar se um número fornecido (por exemplo, 29) é primo. Imprima "É primo"
 ou "Não é primo".*/
 function verificarNumeroPrimo(numero) {
    if (numero <= 1) {
        return "Não é primo";
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return "Não é primo";
        }
    }
    return "É primo";
}


const numeroParaVerificar = 29;
const resultado = verificarNumeroPrimo(numeroParaVerificar);
console.log();
