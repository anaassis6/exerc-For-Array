/*4 – Faça um programa que dê entrada manual de 10 números
armazene em um vetor, em seguida inverter a ordem de
armazenamento em outro vetor, utilize laços de repetição para
fazer essa atividade
Nome: Ana Luiza de Assis
*/
var teclado = require("prompt-sync")();
var primeiro = new Array(9);
var segundo = new Array(9);
var n1 = 0;
for (var x = 0; x <= 9; x++) {
    primeiro[x] = parseFloat(teclado("Digite o n\u00FAmero do \u00EDndice ".concat(x, ": ")));
}
for (var y = 9; y >= 0; y--) {
    segundo[y] = primeiro[n1];
    n1++;
}
console.log("".concat(segundo));
