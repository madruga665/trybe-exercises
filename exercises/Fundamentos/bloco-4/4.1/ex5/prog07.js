let a = 10;
let b = 5;
let c = 2;

if (a > b && a > c) {
  console.log(`${a} é o maior numero entre ${a}, ${b}, ${c}`);
} else if (b > a && b > c) {
  console.log(`${b} é o maior numero entre ${a}, ${b}, ${c}`);
} else if (c > a && c > b) {
  console.log(`${c} é o maior numero entre ${a}, ${b}, ${c}`);
} else {
  console.log(`existem 2 ou mais numeros iguais`);
}
