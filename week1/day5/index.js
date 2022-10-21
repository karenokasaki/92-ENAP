/* 
NOTAS DO LAB DE ONTEM
*/

/* const numbers = [10, 20, 20, 10, 50, 50];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 20) {
    continue;
  }

  console.log(numbers[i]);
} */

// .includes()
/* const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];
if (wordsFind.includes("Sergio")) {
  console.log("A palavra existe dentro da array");
} else {
  console.log("A palavra não existe dentro da array");
}

let str = "Ironhack e Enap aprendendo programação";
console.log(str.includes("Enap"));
 */

// 3 maneiras de se fazer uma função

// DECLARANDO UMA FUNÇÃO
function getSum(num1, num2) {
  return num1 + num2;
}
// function expressions -> EXPRESSÃO
// guarda a função dentro de uma variável
const getGrades = function () {
  console.log("dentro de getGrades");
};

//arrow function -> EC6
const getName = (name) => {
  //console.log("dentro da expressão de uma função", name);
  return name;
};

const myname = getName("Karen");
//console.log(myname);

// callback ->>>>>>>>>>>>>> () => {}
//  O Q É uma callback: é uma função que é passada como ARGUMENTO para outra função
//objetivo: função que vai me dar um numero randomico toda as vezes que ela for invocada. e esse numero SÓ PODE SER PAR

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function getRandomNumberEven(isEven) {
  let randomNumber = Math.floor(Math.random() * 100);
  console.log(`Criei um numero randomico: ${randomNumber}`);

  let result = isEven(randomNumber);
  console.log(`Checando se o numero criado é par. o resultado é: ${result}`);

  if (result === true) {
    return `Seu numero randomico e par é: ${randomNumber}`;
  } else {
    console.log(`O numero não foi par, vamos rodar a função novamente`);
    return getRandomNumberEven(isEven);
  }
}

getRandomNumberEven(isEven); // isEven é uma callback
