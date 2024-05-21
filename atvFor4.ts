/*4 – Faça um programa que dê entrada manual de 10 números
armazene em um vetor, em seguida inverter a ordem de
armazenamento em outro vetor, utilize laços de repetição para
fazer essa atividade
Nome: Ana Luiza de Assis
*/
const teclado = require (`prompt-sync`)();
let primeiro: number [] = new Array (9);
let segundo: number [] = new Array (9);
let n1 = 0;

for(let x= 0; x <= 9; x++){
    primeiro [x]= parseFloat(teclado(`Digite o número do índice ${x}: `));
}

for(let y = 9; y >= 0; y--){    
    segundo [y] = primeiro[n1];
    n1++;
}
console.log(`${segundo}`);