/*3- Faça um programa que dê entrada com 10 números
armazene em um vetor, e verifique qual é o maior
número e mostre no console.
Nome: Ana Luiza de Assis*/
var teclado = require("prompt-sync")();
var vetor = new Array(9);
var maior = 0;
for (var x = 0; x <= 9; x++) {
    vetor[x] = parseInt(teclado("Digite o n\u00FAmero do \u00EDndice ".concat(x, ": ")));
}
for (var x = 0; x <= 9; x++) {
    if (vetor[x] > maior) {
        maior = vetor[x];
    }
}
console.log("O maior n\u00FAmero \u00E9 ".concat(maior));
