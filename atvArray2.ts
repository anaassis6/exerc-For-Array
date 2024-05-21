/*2 – Faça um laço de repetição que contenha uma operação
aritmética qualquer , esse laço vai se repetir 10x utilizando
entrada de dados (prompt Sync), os resultados de cada operação
será armazenado em um vetor, após o termino do laço de
repetição os resultados de cada operação armazenada deve ser
exibido (com laço de repetição ou não).
Nome: Ana Luiza de Assis*/

const teclado = require (`prompt-sync`)();

console.log (`************Digite os valores que deseja somar a seguir************`);
let resultado : number [] = new Array (9);
function soma(n1: number,n2: number): number{
    return n1+n2;
}
   
for(let x=0; x<=9; x++){
    let n1: number = parseFloat(teclado(`Digite o primeiro número: `));
    let n2: number = parseFloat(teclado(`Digite o segundo número: `));
    resultado[x] = soma(n1,n2);
    console.log(`Resultado da operação ${x + 1}: ${resultado[x]}`);
}

console.log(`Os resultados são ${resultado}`);
