const readline = require("readline-sync");

const distancia = readline.questionFloat("Qual a distancia percorrida? em metros ");
const tempo = readline.questionFloat("Quanto tempo demorou? em segundos ");

const velocidadeMedia = (distancia, tempo) => {
  const result = (distancia / tempo).toFixed(2);
  return result;
};

console.log("===== SUA VELOCIDADE MEDIA FOI =====");
console.log(velocidadeMedia(distancia, tempo));
