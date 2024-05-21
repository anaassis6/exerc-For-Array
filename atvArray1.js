/*1 – Faça dois vetores, um que contenha cada dia da semana,
o outro que contenha sete atividades/hobby. Crie uma frase
para cada dia da semana usando todos os índices dos dois vetores.
Nome: Ana Luiza de Assis*/
var dias = ["Domingo", "Segunda-feira", "Ter\u00E7a-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "S\u00E1bado"];
var hobbies = ["ando de bicicleta", "jogo v\u00EDdeo-game", "cozinho", "pratico nata\u00E7\u00E3o", "fa\u00E7o aula de artesanato", "fa\u00E7o academia", "construo rob\u00F4s"];
for (var frase = 0; frase <= 6; frase++) {
    console.log("No(a) ".concat(dias[frase], ", eu ").concat(hobbies[frase]));
}
