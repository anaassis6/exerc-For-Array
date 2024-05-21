/*7- Faça um programa para calcular n! (Fatorial de
n), sendo que o valor inteiro de n é fornecido pelo
usuário. utilize laço de repetição for.
Nome: Ana Luiza de Assis
*/
const teclado= require (`prompt-sync`)();

let n1: number = parseInt(teclado(`Digite o número que deseja descobrir o fatorial: `));
let vetorial = 1;
for(let i = 1; i <= n1; i++){
    vetorial *= i
}
console.log(vetorial)
