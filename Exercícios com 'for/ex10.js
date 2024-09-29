/*10 - Encontre o maior divisor comum (MDC) de dois números
Escreva um programa que use um loop do while para encontrar o maior divisor comum (MDC) de dois números fornecidos (por exemplo, 56 e 98).*/
function calcularMDC(num1, num2) {
    // Garantir que num1 e num2 sejam números positivos
    if (num1 <= 0 || num2 <= 0) {
        return "Por favor, insira números positivos.";
    }

    // Inicializar o divisor
    let divisor = Math.min(num1, num2);
    let mdc = 1;

    // Loop do while para encontrar o MDC
    do {
        if (num1 % divisor === 0 && num2 % divisor === 0) {
            mdc = divisor;
            break; // Encontrou o MDC, sai do loop
        }
        divisor--; // Decrementa o divisor
    } while (divisor > 0);

    return mdc;
}

// Exemplo de uso
const num1 = 56;
const num2 = 98;
const resultado = calcularMDC(num1, num2);
console.log(`O MDC de ${num1} e ${num2} é: ${resultado}`);