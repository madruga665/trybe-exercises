function hydrate(drinks) {
  let amount = drinks.match(/[0-9]/g).map(Number);
  let sum = amount.reduce((acumulador, index) => acumulador + index);
  if (sum > 1) {
    return `${sum} copos de água`;
  }
  return `${sum} copo de água`;
}

module.exports = hydrate;