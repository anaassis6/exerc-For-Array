/*5- Faça um programa que dê entrada manual de 10 números
armazene em um vetor e ordene esses 10 números crescente,
fazer uso do laço de repetição for.
Nome: Ana Luiza de Assis
*/
const teclado = require (`prompt-sync`)();

let vetor: number [] = new Array ();

for(let x= 0; x <= 9; x++){
    vetor [x] = parseFloat(teclado(`Digite o número do índice ${x}: `));
}

for(let z= 0; z<= 9; z++){
    for(let y= 0; y<=9; y++){
        if(vetor [z] < vetor [y]){
            let temporario = vetor [z]
            vetor [z] = vetor [y]
            vetor [y] = temporario
        }
    }
}
console.log (vetor)

