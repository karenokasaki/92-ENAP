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
//getRandomNumberEven(isEven); // isEven é uma função callback agora pq ela está sendo passada como argumento para outra função

function multiplyBy10(number) {
  return number() * 10;
}
function random() {
  return Math.floor(Math.random() * 100);
}
//console.log(multiplyBy10(random));

// FOR EACH
const numbers = [10, 20, 30, 40, 50, 60];

/* const numbersFiltered = numbers.filter((element) => {
    if (element < 30) {
        return true
    } 
    if (element < 40) {
        return true
    }
}) */

let numbersByNumbers = [];
/* for (let i = 0; i < numbers.length; i++) {
  numbersByNumbers.push(numbers[i] * numbers[i]);
} */

// forEach itera sobre minha array
const maiorQue40 = [];
numbers.forEach((element, index) => {
  console.log(index);
  if (element > 40) {
    maiorQue40.push(element);
  }
});

const places = [
  {
    title: "Awesome Suite 20' away from la Rambla",
    price: 200,
    type: "Private Room",
    pool: true,
    garage: false,
  },
  {
    title: "Private apartment",
    price: 190,
    type: "Entire Place",
    pool: true,
    garage: true,
  },
  {
    title: "Apartment with awesome views",
    price: 400,
    type: "Entire Place",
    pool: false,
    garage: false,
  },
  {
    title: "Apartment in la Rambla",
    price: 150,
    type: "Private Room",
    pool: false,
    garage: true,
  },
  {
    title: "Comfortable place in Barcelona´s center",
    price: 390,
    type: "Entire place",
    pool: true,
    garage: true,
  },
  {
    title: "Room near Sagrada Familia",
    price: 170,
    type: "Private Room",
    pool: false,
    garage: false,
  },
  {
    title: "Great house next to Camp Nou",
    price: 140,
    type: "Entire place",
    pool: true,
    garage: true,
  },
  {
    title: "New apartment with 2 beds",
    price: 2000,
    type: "Entire place",
    pool: false,
    garage: true,
  },
  {
    title: "Awesome Suite",
    price: 230,
    type: "Private Room",
    pool: false,
    garage: false,
  },
  {
    title: "Apartment 10' from la Rambla",
    price: 930,
    type: "Entire place",
    pool: true,
    garage: true,
  },
];

// .map()
// retorna uma nova array!!! -> vai retornar uma array EXATAMENTE DO MESMO TAMANHO DA ARRAY ORIGINAL

const onlyPrices = places.map((element) => {
  return element.price; // o que estiver no RETURN do map, vai pra dentro da nova array
});
console.log(onlyPrices);

const pricesReal = places.map((element) => {
  return element.price * 5.6;
});

const onlyTitleAndPrices = places.map((element) => {
  let obj = {
    titulo: element.title,
    preco: element.price,
    piscina: element.pool,
  };

  return obj;
});

// .filter()
const onlyPools = places.filter((element) => {
  //filter espera receber no return UMA CONDIÇÃO LÓGICA
  // se true -> entra pra array filtrada
  // se false -> não entra pra array filtrada
  return element.pool === true || element.garage === true;
});
console.log(onlyPools);

/* const apsBaratos = places.filter((element) => {
    return element.price < 200
}) */
//modo de escrever em uma linha só. arrow function
const apsBaratos = places.filter((element) => element.price < 200);
console.log(apsBaratos);

// .reduce()
/* const numbers2 = [10, 20, 30, 40, 50, 60];
const total = numbers2.reduce((contador, element) => {
  console.log(`contador: ${contador} | element: ${element}`);
  return contador + element;
}, 0);
console.log(total); */

const totalPrices = places.reduce((contador, element) => {
  //console.log(`contador: ${contador} | element: ${element.price}`);

  return contador + element.price;
}, 0);
//console.log(totalPrices);

// .sort()
const numbers3 = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];
//console.log(numbers3.sort());

numbers3.sort((a, b) => {
  console.log(`a = ${a} b = ${b}. a - b = ${a - b}`);
  //se a - b for maior que zero -> b vem antes de a
  //se a - b for menor que zero -> a vem antes de b
  //se a - b for igual a zero -> não trocar de lugar
  return a - b;
});

// COMO EU ORDENO UMA ARRAY DO MENOR NUMERO PARA O MAIOR NUMERO??
numbers3.sort((a, b) => {
  return a - b;
});
console.log(numbers3);
console.log(numbers3.reverse());

// COMO EU ORDENO UMA ARRAY DO MAIOR NUMERO PARA O MENOR NUMERO??
/* numbers3.sort((a, b) => {
  return b - a;
});
console.log(numbers3); */

const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];
