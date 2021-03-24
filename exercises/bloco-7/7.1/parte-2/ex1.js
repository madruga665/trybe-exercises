const factorial = (number) => {
  let result = 1;
  
  for (let index = 1; index <= number; index += 1) {
    result *= index;
  }
  return result;
}

console.log(factorial(5));

const factorialRecursive = (number) => number > 1 ? number * factorialRecursive(number -1) : 1;

console.log(factorialRecursive(6));