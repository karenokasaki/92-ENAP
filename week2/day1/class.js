// class -> programção orientada a objeto!!

const x = {
  nome: "karen",
  func: () => {
    console.log("eu estou dentor de um obj e sou uma função");
  },
};

//MÉTODOS SÃO FUNÇÕES QUE VIVEM DENTRO DE CLASSES
// métodos são funções!!

//console.log(x.func());

//sintax
//CLASSES SEMPRE COM INICIAL MAIUSCULA!!
// palavra reservada class + nome da minha classe + bloco de execução
//contructor CONSTRÓI O NOSSO OBJETO

class Game {
  constructor(nomeCompleto, idade, pontos) {
    this.nome = nomeCompleto;
    this.idade = idade;
    this.pontos = pontos;
    this.ganhou = false;
  }

  //escrever um método -> escrever uma função
  play() {
    let dado = Math.round(Math.random() * 5) + 1;
    this.pontos -= dado;
    return `${this.nome} está com ${this.pontos}`;
  }
}
//instanciar uma classe!! + passar os argumentos que ela pede
const player1 = new Game("Karen", 29, 100);
//instanciar uma classe!! + passar os argumentos que ela pede
const player2 = new Game("Jino", 28, 5);

console.log("primeira rodada");
console.log(player1.play());
console.log(player2.play());

console.log("segunda rodada");

console.log(player1.play());
console.log(player2.play());


if (player1.pontos > player2.pontos) {
    console.log(`${player1.nome} ganhou!! `)
}
if (player1.pontos < player2.pontos) {
    console.log(`${player2.nome} ganhou!! `)
}
if (player1.pontos === player2.pontos) {
    console.log(`Os dois ganharam!! `)
}

