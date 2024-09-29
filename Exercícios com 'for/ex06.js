/* Escreva um programa que use um loop while para verificar se um número fornecido (por exemplo, 121) é um palíndromo. Um número é palíndromo se ele é igual ao seu reverso.*/

function isPalindromo(numero) {
    
    let strNumero = numero.toString();
    let reverso = '';
    let i = strNumero.length - 1;

    
    while (i >= 0) {
        reverso += strNumero[i];
        i--;
    }

    
    return strNumero === reverso;
}


const numero = 121;
if (isPalindromo(numero)) {
    console.log(`${numero} é um palíndromo.`);
} else {
    console.log(`${numero} não é um palíndromo.`);
}