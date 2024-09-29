/*3 - Imprima um triângulo de números

Escreva um programa que use um loop for para imprimir um triângulo de números.*/

const linhas = 5;

// Loop externo para cada linha
for (let i = 1; i <= linhas; i++) {
    // Loop interno para imprimir os números em cada linha
    for (let j = 1; j <= i; j++) {
        process.stdout.write(j + " "); // Imprime o número na mesma linha
    }
    console.log(); // Muda para a próxima linha após imprimir todos os números da linha atual
}