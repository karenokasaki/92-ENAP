// TODOS COMEÇAM COM 10 PONTOS
// dados são jogados e o numero é subtraído dos pontos
// depois da segunda rodada, quem tiver mais pontos restantes ganha.

//player -> tem nome, tem idade, tem pontos

const player1 = {
  nome: "Priscila",
  age: 22,
  pontos: 10,
};

const player2 = {
  nome: "Vitor",
  age: 25,
  pontos: 10,
};



console.log("PRIMEIRA RODADA");
//jogar um dado -> 1 a 6
let dado = Math.round(Math.random() * 5) + 1;
//player1.pontos = player1.pontos - dado;
player1.pontos -= dado;

let dado1 = Math.round(Math.random() * 5) + 1;
player2.pontos -= dado1;

console.log(player1.nome, player1.pontos);
console.log(player2.nome, player2.pontos);

console.log("SEGUNDA RODADA");
//priscila jogou
let dado3 = Math.round(Math.random() * 5) + 1;
player1.pontos -= dado3;

//vitor jogou
let dado4 = Math.round(Math.random() * 5) + 1;
player2.pontos -= dado4;

if (player1.pontos > player2.pontos) {
  console.log(`${player1.nome} ganhou!!`);
}
if (player1.pontos < player2.pontos) {
  console.log(`${player2.nome} ganhou!!`);
}

console.log(player1.nome, player1.pontos);
console.log(player2.nome, player2.pontos);

console.log("FINAL DO JOGO");


