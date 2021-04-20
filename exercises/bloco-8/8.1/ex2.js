const numberCheck = (myNumber, number) => {
  return myNumber === number;
};

const result = (myNumber, numberCheck) => {
  const number = Math.round(Math.random() * 5);

  if (numberCheck(myNumber, number)) {
    return `O numero sorteado foi ${number} parabens você ganhou`;
  } else {
    return `O numero sorteado foi ${number} você perdeu tente novamente`;
  }
};

console.log(result(2, numberCheck));
