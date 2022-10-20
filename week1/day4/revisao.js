// RESOLUÇÃO DO LAB ITERAÇÃO 3

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
const hacker1 = "aaron";
const hacker2 = "aaaron";

let novoNome = "";
for (let i = 0; i < hacker1.length; i++) {
  //novoNome = novoNome + hacker1[i]

  if (i === hacker1.length - 1) {
    novoNome += `${hacker1[i].toUpperCase()}`; //K A R E N
  } else {
    novoNome += `${hacker1[i].toUpperCase()} `; //K A R E N
  }
}
console.log(novoNome);

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverse += hacker2[i];
}
console.log(reverse);

/* 3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name? */

//console.log(hacker1.localeCompare(hacker2)); // 1

if (hacker1.localeCompare(hacker2) === 0) {
  console.log("What?! You both have the same name?");
}
if (hacker1.localeCompare(hacker2) > 0) {
  console.log(" Yo, the navigator goes first definitely.");
}
if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
}
