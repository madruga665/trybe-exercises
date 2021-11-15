function countDown(x) {
  let list = [];
  let condicao = true;

  while (condicao) {
    list.push(x);
    if (x <= 0) {
      condicao = false;
    }
    x -= 1;
  }
  const result = list.map((number) => {
    if (number === 0) {
      return `${number}!!!`;
    }
    return `${number}...`;
  });
  return result.join("");
}

console.log(countDown(10));
