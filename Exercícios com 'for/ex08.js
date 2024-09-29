/* Escreva um programa que use um loop do while para calcular a soma dos dígitos de um número fornecido (por exemplo, a soma dos dígitos de 1234 é 10).*/
function somaDosDigitos(numero) {
    let soma = 0;
    

    numero = Math.abs(numero);

    {
        soma += numero % 10; 
        numero = Math.floor(numero / 10); 
    } while (numero > 0);
    
    return soma;
}


const resultado = somaDosDigitos(numeroFornecido);
console.log(`A soma dos dígitos de ${numeroFornecido} é ${resultado}.`);