//primitivos

let number = 10;
let boolean = true;

let string1 = "ironhack";
let string2 = string1;

string1 = "Enap";

console.log(string1);
console.log(string2);

//valores primitivos não são passados por REFERENCIA

//arrays e objetos

//shallow copy
const obj = {
  enterprise: "Ironhack",
  courses: ["webdev", "ux/ui", "ds"],
};

const obj2 = { ...obj };
const clone = JSON.parse(JSON.stringify(obj));

obj.enterprise = "Enap";
obj.courses[2] = "cyberSecurity";

console.log("obj1", obj);
//console.log("obj2", obj2);
console.log("clone por JSON", clone);

// COMO FAZER O DEEPCOPY de um obj/array
// JSON.stringify() => transforma o objeto em uma string
// JSON.parse() => transforma uma string em um objeto

//biblioteca
//lodash

