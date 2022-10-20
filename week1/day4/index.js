//criar de arrays
//sintax
// tudo que existe dentro de um array é chamado de ELEMENTO
const produtos = ["COMPUTADOR", "MOUSE", "MESA", "CADEIRA", "PLANTA"];
//acessando elementos dentro da minha array
//console.log(produtos[3]);
//propriedade chamada .length//console.log(produtos.length);
// altero elementos que já existem dentro da array
produtos[4] = "AR CONDICIONADO";
//adicionar os elementos
//.push() END
produtos.push("CAFETEIRA");
//UNSHIFT()
produtos.unshift("LUMINÁRIA");

//remover elementos
//pop() remove do final da array
produtos.pop();
//shift() remove do inicio da array
produtos.shift();

//splice()
// altera a array original
// remove elementos
// adiciona elementos
produtos.splice(2, 1);
//console.log(produtos);

//slice()
// gera uma nova array com um pedaço da array original
const novaArray = produtos.slice(1, 3);
//console.log(novaArray);

///////////////////////////////////////////////
//! OBJETOS
// sintax
// key : value
const objProduto = {
  anoFab: 2021,
  preco: 2500,
  marca: "ACER",
  nome: "Computador",
};
//acessando as propriedades de um objeto -> key -> chave
//dot notation -> .
//console.log(objProduto.marca); // "ACER"
//console.log(objProduto.preco); // 2500

//alterar o valor de um propriedade existente
objProduto.anoFab = 2022;

// adicionar uma propriedade
objProduto.inStock = true;

// remover uma propriedade
delete objProduto.nome;
//console.log(objProduto);

// [] === Array -> index
// {} === OBJETO -> key:value

const turma92 = {
  numeroDeAlunos: 26,
  local: "Zoom",
  estudantes: ["Priscila", "Annielli", "Ewerton", "Marcio", "Jino"],
  professores: {
    LT: "Karen",
    TA1: "Jino",
    TA2: "Dani",
  },
};
//console.log(turma92.estudantes[2]);

const school = {
  name: "Fake School 1",
  classRooms: [
    {
      teacher: { firstName: "Marcelino", lastName: "Padberg", age: 25 },
      students: [
        { firstName: "Aliyah", lastName: "Schulist", age: 18 },
        { firstName: "Cleveland", lastName: "Towne", age: 28 },
        { firstName: "Jan", lastName: "Quitzon", age: 18 },
        { firstName: "Alaina", lastName: "Runolfsdottir", age: 18 },
        { firstName: "Gerhard", lastName: "Bergstrom", age: 23 },
      ],
    },
    {
      teacher: { firstName: "Edwardo", lastName: "Schowalter", age: 28 },
      students: [
        { firstName: "Manley", lastName: "Doyle", age: 18 },
        { firstName: "Maximilian", lastName: "Gleichner", age: 19 },
        { firstName: "Sid", lastName: "Rohan", age: 30 },
        { firstName: "Catalina", lastName: "Hilpert", age: 27 },
        { firstName: "Gerald", lastName: "O'Keefe", age: 26 },
      ],
    },
  ],
};
// CHEGAR NA 'Alaina'
//console.log(school.classRooms[0].students[3].firstName);
// chegar no 'Edwardo'
//console.log(school.classRooms[1].teacher.firstName);

////////////////////////////////////
//! FUNÇÕES

//sintax
// DECLARANDO A FUNÇÃO
function nomeDaFuncao(parametro) {
  //código

  //console.log("DENTRO DA FUNÇÃO");
  return;
}
//INVOCANDO A FUNÇÃO
nomeDaFuncao();
//podemos invocar a função em qualquer lugar do nosso arquivo js.

//parametro vs argumento
function sayHi(nome) {
  console.log("parametro", nome); // => parametro

  console.log(`Olá ${nome}! Seja bem vindo!`);
}

//sayHi("Karen"); // => argumento
//sayHi("Guilherme"); // => argumento

// uma função que some todos os numeros que existem dentro de uma array
function getSum(array) {
  let contador = 0;

  for (let i = 0; i < array.length; i++) {
    contador += array[i];
  }

  return contador;
}

const numbers = [1, 2, 54, 21, 200, 36, 58, 74];
//const total = getSum(numbers);
//console.log(getSum(numbers));

const grades = [
  { nome: "Jino", materia: "JS", nota: 4 },
  { nome: "Paulo", materia: "JS", nota: 8 },
  { nome: "Dani", materia: "JS", nota: 6 },
  { nome: "Demetrius", materia: "JS", nota: 10 },
  { nome: "Marcio", materia: "JS", nota: 7 },
  { nome: "Michela", materia: "JS", nota: 8 },
  { nome: "Karen", materia: "JS", nota: 4 },
  { nome: "Sergio", materia: "JS", nota: 8 },
];

function getGrades(array) {
  let resumo = {
    aprovados: [],
    reprovados: [],
  };

  for (let i = 0; i < array.length; i++) {
    if (array[i].nota >= 6) {
      resumo.aprovados.push(array[i]);
    } else {
      resumo.reprovados.push(array[i]);
    }
  }

  return resumo;
}
console.log(getGrades(grades));
