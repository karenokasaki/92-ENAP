// programação sincrôna

console.log("Esse é meu primeiro console.log()");

//setTimeOut() é uma função que dá um DELAY no código que existe dentro dela

/* const timeOut = setTimeout(() => {
  console.log("Esse é meu segundo console.log()");
}, 20000); // 5 segundos */
//console.log(timeOut);
console.log("Esse é meu terceiro console.log()");
//limpando meu setTimeOut()


//setInterval() => programo minha função para ser executada em um INTERVALO DE TEMPO
//exemplo: de 2 em 2 segundos

let counter = 0;

const timeInterval = setInterval(() => {
  counter++;
  console.log(counter);

  if (counter === 7) {
    clearInterval(timeInterval);
  }
}, 1000);
