/*7- Faça um programa para calcular n! (Fatorial de
n), sendo que o valor inteiro de n é fornecido pelo
usuário. utilize laço de repetição for.
Nome: Ana Luiza de Assis
*/
var teclado = require("prompt-sync")();
var n1 = parseInt(teclado("Digite o n\u00FAmero que deseja descobrir o fatorial: "));
var vetorial = 1;
for (var i = 1; i <= n1; i++) {
    vetorial *= i;
}
console.log(vetorial);
