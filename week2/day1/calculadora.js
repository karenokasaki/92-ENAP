//sintax
class Calculadora {

  //métodos
  somar(num1, num2) {
    return num1 + num2;
  }

  //métodos
  subtrair(num1, num2) {
    return num1 - num2;
  }

  //métodos
  multiplicar(num1, num2) {
    return num1 * num2;
  }
}

//instanciar nossa calculadora

const cal = new Calculadora();
console.log(cal);


console.log(cal.somar(10, 30))
console.log(cal.subtrair(100, 50))
console.log(cal.multiplicar(5, 5))