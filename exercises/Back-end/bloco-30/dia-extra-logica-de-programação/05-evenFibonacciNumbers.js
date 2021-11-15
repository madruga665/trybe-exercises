function evenFibonacciNumbers(roof) {
  const fib = [1, 2];
  let number;

  for (let index = 2; index < roof; index += 1) {
    number = fib[index - 2] + fib[index - 1];
    fib.push(number);
  }
  const oddNumbers = fib.filter((element) => element % 2 === 0);
  const oddNumberlessThanRoof = oddNumbers.filter((element) => element < roof);
  const result = oddNumberlessThanRoof.reduce((accumulator, currentValue) => accumulator + currentValue);
  return result;
}

console.log(evenFibonacciNumbers(100));
