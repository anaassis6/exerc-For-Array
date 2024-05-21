/*1 – Faça dois vetores, um que contenha cada dia da semana,
o outro que contenha sete atividades/hobby. Crie uma frase
para cada dia da semana usando todos os índices dos dois vetores.
Nome: Ana Luiza de Assis*/

let dias : string [] = [`Domingo`, `Segunda-feira`, `Terça-feira`, `Quarta-feira`, `Quinta-feira`, `Sexta-feira`, `Sábado`];
let hobbies : string [] = [`ando de bicicleta`, `jogo vídeo-game`, `cozinho`, `pratico natação`, `faço aula de artesanato`, `faço academia`, `construo robôs`];
for (let frase= 0; frase <= 6; frase++){
    console.log(`No(a) ${dias[frase]}, eu ${hobbies[frase]}`);
}