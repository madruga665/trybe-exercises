function multiplesOf3Or5(roof) {
  const list = [];
  for (let index = 1; index < roof; index++) {
    if (index % 3 === 0 || index % 5 === 0) {
      list.push(index);
    }
  }
  const result = list.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return result;
}

console.log(multiplesOf3Or5(10));
