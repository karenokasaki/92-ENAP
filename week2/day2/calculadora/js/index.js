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

/* 
const items = document.getElementsByClassName("item");
console.log(items);
const items2 = document.querySelectorAll(".item");
console.log(items2); 
*/
//const items = document.querySelectorAll(".list li");

/* ====================== */
// EVENTOS DE CLICK

/* btnSoma.onclick = () => {
  console.log("dentro do onclick");
};

const title = document.querySelector("#title");
title.onclick = () => {
  console.log("Eu cliquei no titulo!!!");
}; */

// capturando os elementos HTML
const btnSoma = document.querySelector("#btn-soma");
const input1 = document.getElementById("input1"); // id é unico ou seja -> APENAS UM ELEMENTO
const input2 = document.querySelector("#input2");
const total = document.querySelector("#total");

console.log(input2);
console.log(input1);

btnSoma.addEventListener("click", (event) => {
  //sempre dê console.log(event) para saber mais informações sobre o EVENTO DE CLICK
  //tudo que estiver dentro dessa função vai acontecer quando o botão for CLICADO

  //input.value =>>> string
  let resultado = calculadora.soma(+input1.value, +input2.value);

  total.innerText = resultado;

  //limpando os campos dos inputs
  input1.value = "";
  input2.value = "";

  setTimeout(() => {
    total.innerText = "";
  }, 3000);
});

const lista = document.querySelector("#tasks");
const btnTask = document.querySelector("#btn-task");
const inputTask = document.querySelector("#inputTask");

btnTask.onclick = () => {
  // tag li criada ->>> <li></li>
  let li = document.createElement("li");

  //popular a tag li com o valor do input
  // <li>estudar dom</li>
  li.innerText = inputTask.value;

  //acrescentar essa LI na LISTA de tarefas -> <ol id="tasks"></ol>

  lista.appendChild(li);

  //limpar o input
  inputTask.value = "";
  inputTask.focus();
};

const listTec = document.querySelector("#list-tec");

const favorites = ["React", "MongoDb", "Express", "Node.js"];

//como iterar por uma array??
favorites.forEach((element, index) => {
  let li = document.createElement("li");
  li.innerText = element;

  //adiciona uma classe a tag li
  if (index % 2 === 0) {
    li.classList.add("itemPar");
  } else {
    li.classList.add("itemImpar");
  }

  //adiciona um id a tag li
  li.setAttribute("id", element);

  listTec.appendChild(li);
});
