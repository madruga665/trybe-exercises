let angulo1 = 100;
let angulo2 = 40;
let angulo3 = 40;

let soma = angulo1 + angulo2 + angulo3 == 180;

if (soma == true) {
  console.log(`É um triangulo? ${soma}`);
} else if ( soma <= 0) {
  console.log(`${soma}`)
  console.log(`ERROR`);
}
