/*5- Faça um programa que dê entrada manual de 10 números
armazene em um vetor e ordene esses 10 números crescente,
fazer uso do laço de repetição for.
Nome: Ana Luiza de Assis
*/
var teclado = require("prompt-sync")();
var vetor = new Array();
for (var x = 0; x <= 9; x++) {
    vetor[x] = parseFloat(teclado("Digite o n\u00FAmero do \u00EDndice ".concat(x, ": ")));
}
for (var z = 0; z <= 9; z++) {
    for (var y = 0; y <= 9; y++) {
        if (vetor[z] < vetor[y]) {
            var temporario = vetor[z];
            vetor[z] = vetor[y];
            vetor[y] = temporario;
        }
    }
}
console.log(vetor);
