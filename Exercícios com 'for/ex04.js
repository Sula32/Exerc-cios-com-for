/* 4 - Calcule o fatorial de um número*/
function fatorial(n) {
    if (n < 0) {
        return "O fatorial não está definido para números negativos.";
    }
    if (n === 0 || n === 1) {
        return 1; // O fatorial de 0 e 1 é 1
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i; // Multiplica o resultado pelo número atual
    }
    return resultado;
}

// Exemplo de uso:
const numero = 5;
console.log(`O fatorial de ${numero} é ${fatorial(numero)}`);