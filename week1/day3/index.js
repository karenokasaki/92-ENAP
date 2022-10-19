const number = 0;

const float = 1.75;

const string1 = "string";
const string2 = "string";
// interpolar
const string3 = `Ironhack Web Dev - Enap 2022`;
//propriedade .length
//console.log(string3.length); // propriedade
//console.log(string3.toUpperCase()); // método
//console.log(string3.toLowerCase()); // método
//console.log(string3.charAt(0)) // passar o index da string
//console.log(string3[6]) // acessar string pelo index
//console.log(string3.indexOf("Enap"));
//console.log(string3.startsWith("Iron"));
//console.log(string3.endsWith("2022"));

// slice()
// localeCompare()

// objeto
const produto = {
  nome: "Tênis",
  preco: 200,
  marca: "Adidas",
};

//jeito antigo de interpolar strings
/* console.log(
  "Bem vindo! Temos " +
    produto.nome +
    " no valor de: " +
    produto.preco +
    "reais, da marca: " +
    produto.marca
);
//jeito novo de interpolar strings
console.log(
  `Bem vindo! Temos ${produto.nome}, no valor de: ${produto.preco}, da marca: ${produto.marca}.`
); */

const boolean1 = true;
const boolean0 = false;
// == se refere ao VALOR e não ao TIPO -> true
//console.log("0" == 0);
// === se refere ap VALOR E TIPO -> false
//console.log("0" === 0);

//inicializar a variável sem dar um valor para ela -> undefined
let classRoom;
//const é necessário iniciar E dar o valor no momento da criação da variável
const nameOfScholl = null;

const nullValue = null;
const undefinedValue = undefined;

//const array = [0, 1, 2, 3, 4, 5];

//como saber o tipo da variável
//console.log(typeof array);

//operators
let contador1 = 0;

//contador1 = contador1 + 1;
contador1 += 20;
contador1 -= 10;
//console.log(contador1); // -> 10
contador1++; // adiciona 1 a somatória
//console.log(contador1); // -> 11

//console.log(10 + 10);
//console.log(10 - 10);
//console.log(10 * 10);
//console.log(10 / 10);
//console.log(2 ** 5); // 2 * 2 * 2 * 2 * 2

const peso = 54.8;
//console.log(Math.floor(peso));
//console.log(Math.ceil(peso));
//console.log(Math.max(10, 2, 56, 1, 100));
//console.log(Math.min(10, 2, 56, 1, 100));

//console.log(4 % 2 === 0) -> o numero é par pois não tem nenhum remainder

const array = [0, 1, 2, 3, 4, 5, 6];
// FOR serve para ITERAR por algo

for (let i = 0; i < array.length; i++) {
  //console.log("i é =", i, "valor =", array[i]);
}
//sintax
// 1ª iniciar o seu iterador ou seja, iniciar o index
// 2ª por quanto tempo o for vai rodar
// 3ª o que vai acontecer com o I

// o loop vai acontecer na mesma quantidade de elemento que existem dentro da array
const alunos = [
  "Demetrius", // 0
  "Marcos", // 1
  "Vitor", // 2
  "Guilherme",
  "Anderson",
  "Michela",
  "André",
  "Marcelo",
];

let contador = 0;
for (let i = 0; i < alunos.length; i++) {
  if (alunos[i].startsWith("M")) {
    console.log(
      "CAIMOS NO IF. ALUNO COMEÇA COM A LETRA M",
      "index:",
      i,
      alunos[i]
    );
    contador++;
  }
}

console.log(contador);

const hacker1 = "Karen Okasaki";
console.log(`The driver's name is ${hacker1}`);
