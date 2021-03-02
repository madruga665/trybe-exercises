let myNumber = 25;
let myArray = [];
let arrayDivision = [];
let division;

for (let index = 1; index <= myNumber; index = index + 1) {
  myArray.push(index);
}

for (let index = 0; index < myArray.length; index = index + 1) {
  division = myArray[index] / 2;
  arrayDivision.push(division);
}

console.log(arrayDivision);





