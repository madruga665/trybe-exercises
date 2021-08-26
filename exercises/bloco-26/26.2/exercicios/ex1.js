const funcaoComPromise = (a, b, c) => {
  const promise = new Promise((resolve, reject) => {
    if ((typeof a !== "number") | (typeof b !== "number") | (typeof c !== "number")) {
      reject(Error("Informe apenas números"));
    }
    const result = (a + b) * c;

    if (result < 50) {
      return reject(Error("Valor muito baixo"));
    }
    resolve(result);
  });
  return promise;
};

funcaoComPromise(5, 5, 5)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));
