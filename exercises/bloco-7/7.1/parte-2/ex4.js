const habilidades = ["HTML", "Javascript", "CSS"];

const nameFunction = (name) => {
  let saudação = `Trybe ${name} aqui!`;

  habilidades.sort();
  let result = `${saudação} \n Minhas Habiliddades são: \n ${habilidades} \n #goTrybe`;
  return result;
};

console.log(nameFunction("luciano"));
