// ARQUIVO RESPONSÁVEL POR MANIPULAR O DOM!!!

//instanciando a minha classe
const calculadora = new Calculadora();

//MANIPULAR O DOM
// transformando o HTML INTEIRO e um OBJETO que eu possa manipular pelo JAVASCRIPT
// manipular o HTML com JAVASCRIPT

/* 
.getElementsByClassName -> HTMLcollections -> USAR FOR ->> NÃO PODE USAR MÉTODOS DE ARRAY NELA!!  forEach, map, filter... 
.querySelectorAll -> nodeList -> SIM. VOCÊ PODE USAR O FOREACH!!!!


document.getElementsByClassName()
*/

//como capturar elementos do meu HMTL para o meu JS
console.log(document); // é o MEU HTML LINKADO A ESSE JS

// capturando os elementos HTML
const input1 = document.getElementById("input1"); // id é unico ou seja -> APENAS UM ELEMENTO
const input2 = document.querySelector("#input2");

console.log(input2);
console.log(input1);

const items = document.getElementsByClassName("item");
console.log(items);

const items2 = document.querySelectorAll(".item");
console.log(items2);
