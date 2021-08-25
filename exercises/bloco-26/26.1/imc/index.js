const readline = require("readline-sync");

const altura = readline.questionFloat("Qual a sua altura? ");
const peso = readline.questionFloat("Qual seu peso? ");

const imc = (altura, peso) => {
  const result = (peso / (altura * 2)).toFixed(2);

  if (result < 18.5) return `${result} ----- Abaixo do peso (magreza)`;
  if (result > 18.5 && result < 24.9) return `${result} ----- Peso normal`;
  if ((result > 25 && result < 29, 9)) return `${result} ----- Acima do peso (sobrepeso)`;
  if ((result > 30 && result < 34, 9)) return `${result} ----- Obesidade grau I`;
  if ((result > 35 && result < 39, 9)) return `${result} ----- Obesidade grau II`;
  if (result > 40) return `${result} ----- Obesidade graus III e IV`;
};

console.log(imc(altura, peso));
