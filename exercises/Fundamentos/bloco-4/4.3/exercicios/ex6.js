function primeNumber(number) {
  let divisor = 0;
  for (let index = 1; index <= number; index += 1) {
    if (number % index === 0) {
      divisor += 1;
    }
  }
  if (divisor === 2) {
    return `${number} é numero primo`;
  }
  return `${number} não é numero primo`;
}

console.log(primeNumber());
