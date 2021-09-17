let fruits = [3, 4, 10, 1, 12];

let sumAll = fruits.reduce((acc, index) => acc + index);
if (sumAll > 15) {
  console.log(sumAll);
} else if (sumAll <= 15) {
  console.log(`valor menor que 16`);
}
