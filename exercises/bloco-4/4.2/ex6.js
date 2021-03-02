let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumbers = [];

for (let index = 0; index < numbers.length; index = index + 1) {
  if (numbers[index] % 2 != 0) {
    oddNumbers.push(index);
  }
}

if (oddNumbers.length === 0) {
  console.log("Nenhum valor impar encontrado");
} else {
  console.log(oddNumbers.length);
}
