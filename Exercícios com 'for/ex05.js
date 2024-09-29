/* 5 - Inverta os dígitos de um número
Escreva um programa que use um loop while para inverter os dígitos de um número fornecido (por exemplo, 1234 deve ser impresso como 4321).

Dica: Use operações de módulo e divisão para extrair os dígitos.*/

function inverterDigitos(numero) {
    let numeroInverso = 0;

    // Enquanto o número for maior que 0
    while (numero > 0) {
        // Extrai o último dígito do número
        let digito = numero % 10;

        // Adiciona o dígito extraído ao número inverso
        numeroInverso = (numeroInverso * 10) + digito;

        // Remove o último dígito do número original
        numero = Math.floor(numero / 10);
    }

    return numeroInverso;
}

// Exemplo de uso:
let numero = 1234;
let resultado = inverterDigitos(numero);
console.log(resultado); // Saída: 4321