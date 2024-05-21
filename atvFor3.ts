/*3- Faça um programa que dê entrada com 10 números
armazene em um vetor, e verifique qual é o maior
número e mostre no console.
Nome: Ana Luiza de Assis*/
const teclado = require (`prompt-sync`)();

let vetor: number [] = new Array (9);
let maior: number = 0;
for (let x = 0; x <= 9; x++){
    vetor [x] = parseInt(teclado(`Digite o número do índice ${x}: `));
}

for(let x = 0; x <= 9; x++){
    if(vetor[x] > maior){
        maior = vetor [x];
    }
}
console.log(`O maior número é ${maior}`);