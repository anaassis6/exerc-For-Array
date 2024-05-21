/*2 – Faça um laço de repetição que contenha uma operação
aritmética qualquer , esse laço vai se repetir 10x utilizando
entrada de dados (prompt Sync), os resultados de cada operação
será armazenado em um vetor, após o termino do laço de
repetição os resultados de cada operação armazenada deve ser
exibido (com laço de repetição ou não).
Nome: Ana Luiza de Assis*/
var teclado = require("prompt-sync")();
console.log("************Digite os valores que deseja somar a seguir************");
var resultado = new Array(9);
function soma(n1, n2) {
    return n1 + n2;
}
for (var x = 0; x <= 9; x++) {
    var n1 = parseFloat(teclado("Digite o primeiro n\u00FAmero: "));
    var n2 = parseFloat(teclado("Digite o segundo n\u00FAmero: "));
    resultado[x] = soma(n1, n2);
    console.log("Resultado da opera\u00E7\u00E3o ".concat(x + 1, ": ").concat(resultado[x]));
}
console.log("Os resultados s\u00E3o ".concat(resultado));
